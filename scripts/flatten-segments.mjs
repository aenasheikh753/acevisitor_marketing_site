// Next's static export names prefetch files by replacing "/" with ".", which
// misses Windows "\" separators and leaves nested __next.* folders the client
// router cannot find. Flatten them so a Windows build matches a Linux build.
import fs from "node:fs";
import path from "node:path";

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (!entry.name.startsWith("__next.")) {
      walk(full);
      continue;
    }
    for (const relative of fs.readdirSync(full, { recursive: true })) {
      const source = path.join(full, relative);
      if (fs.statSync(source).isDirectory()) continue;
      fs.copyFileSync(source, path.join(dir, `${entry.name}.${relative.replace(/[\\/]/g, ".")}`));
    }
    fs.rmSync(full, { recursive: true });
  }
}

walk("out");
