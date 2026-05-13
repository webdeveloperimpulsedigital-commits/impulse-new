const fs = require('fs');
const files = [
  'src/screens/SearchEngineOptimization/SearchEngineOptimizationServices.tsx',
  'src/screens/AiSeoAgency/AiSeoAgency.tsx',
  'src/screens/EnterpriseSEOServices/EnterpriseSEOServices.tsx',
  'src/screens/eCommerceSEOServices/eCommerceSEOServices.tsx',
  'src/screens/B2BSEOServices/B2BSEOServices.tsx',
  'src/screens/LocalSEOServices/LocalSEOServices.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    if (!content.includes('LocationSelectorSection')) {
      const importStmt = "import { LocationSelectorSection } from '../../components/LocationSelectorSection/LocationSelectorSection';\n";
      const lastImportIndex = content.lastIndexOf('import ');
      const endOfLastImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLastImport + 1) + importStmt + content.slice(endOfLastImport + 1);
      
      content = content.replace('<FooterSection />', '<LocationSelectorSection currentLocation=\"\" />\n        <FooterSection />');
      
      fs.writeFileSync(f, content, 'utf8');
      console.log('Updated:', f);
    } else {
      console.log('Already has LocationSelectorSection:', f);
    }
  } else {
    console.log('Not found:', f);
  }
});
