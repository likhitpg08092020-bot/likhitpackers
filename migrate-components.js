const fs = require('fs');

function migrate(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/import Link from ['"]next\/link['"];?/g, 'import { Link } from "react-router-dom";');
  c = c.replace(/import \{.*?useRouter.*?\} from ['"]next\/navigation['"];?/g, 'import { useNavigate } from "react-router-dom";');
  c = c.replace(/const router = useRouter\(\);/g, 'const navigate = useNavigate();');
  c = c.replace(/router\.push\(/g, 'navigate(');
  c = c.replace(/import Image from ['"]next\/image['"];?/g, '');
  c = c.replace(/<Image([^>]*)\/>/g, (match, p1) => {
    let newProps = p1.replace(/fill/g, 'className="w-full h-full object-cover"');
    return `<img${newProps}/>`;
  });
  fs.writeFileSync(file, c);
}

migrate('src/components/Header.tsx');
migrate('src/components/Footer.tsx');
