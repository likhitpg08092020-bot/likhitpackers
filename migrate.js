const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(srcDir, 'app');
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

function processDirectory(currentPath, currentRoute) {
  const items = fs.readdirSync(currentPath);
  for (const item of items) {
    const fullPath = path.join(currentPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath, `${currentRoute}/${item}`);
    } else if (item === 'page.tsx') {
      const pageName = currentRoute === '' ? 'Home' : currentRoute.split('/').pop();
      const newFileName = currentRoute === '' ? 'index.tsx' : `${currentRoute.substring(1).replace(/\//g, '_')}.tsx`;
      const newFilePath = path.join(pagesDir, newFileName);

      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace next/link with react-router-dom Link
      content = content.replace(/import Link from ["']next\/link["'];?/g, 'import { Link } from "react-router-dom";');
      
      // Replace next/image with img
      content = content.replace(/import Image from ["']next\/image["'];?/g, '');
      content = content.replace(/<Image([^>]*)\/>/g, (match, p1) => {
        // Simple conversion, might need manual tweaks for complex Image props
        let newProps = p1.replace(/fill/g, 'className="w-full h-full object-cover"');
        return `<img${newProps}/>`;
      });

      // Replace next/navigation with react-router-dom
      content = content.replace(/import \{.*?useRouter.*?\} from ["']next\/navigation["'];?/g, 'import { useNavigate } from "react-router-dom";');
      content = content.replace(/const router = useRouter\(\);/g, 'const navigate = useNavigate();');
      content = content.replace(/router\.push\(/g, 'navigate(');

      fs.writeFileSync(newFilePath, content);
      console.log(`Migrated ${fullPath} to ${newFilePath}`);
    }
  }
}

processDirectory(appDir, '');
