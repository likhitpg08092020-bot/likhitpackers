const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace <Link href="..."> with <Link to="...">
      content = content.replace(/<Link([^>]*)href=/g, '<Link$1to=');

      // Replace useSearchParams for login.tsx
      if (content.includes('useSearchParams')) {
        content = content.replace(/import \{.*?useSearchParams.*?\} from ['"]next\/navigation['"];?/g, 'import { useSearchParams } from "react-router-dom";');
        content = content.replace(/const searchParams = useSearchParams\(\);/g, 'const [searchParams] = useSearchParams();');
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('src');
