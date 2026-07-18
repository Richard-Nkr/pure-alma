// Stocke le compteur dans un simple fichier JSON (pas besoin de BDD)
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "preorders.json");

async function readCount(): Promise<{ count: number; max: number }> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { count: 137, max: 500 };
  }
}

async function writeCount(data: { count: number; max: number }) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await readCount();
  return Response.json(data);
}

export async function POST() {
  const data = await readCount();
  if (data.count < data.max) {
    data.count += 1;
    await writeCount(data);
  }
  return Response.json(data);
}
