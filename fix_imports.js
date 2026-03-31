const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('apps/web/src', (err, results) => {
  if (err) throw err;
  
  results.filter(f => f.endsWith('.tsx') || f.endsWith('.ts')).forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Relative to Absolute (@)
    content = content.replace(/from\s+['"](?:\.\.\/)+contexts\/(.*)['"]/g, "from '@/contexts/$1'");
    content = content.replace(/from\s+['"](?:\.\.\/)+components\/([^'"]+)['"]/g, (match, p1) => {
        // Did we move it to UI or shared?
        const uiComponents = ['Layout', 'Navigation', 'Footer'];
        const name = p1.replace('.tsx', '');
        return uiComponents.includes(name) ? `from '@/ui/${p1}'` : `from '@/shared/components/${p1}'`;
    });
    content = content.replace(/from\s+['"](?:\.\.\/)+sections\/(.*)['"]/g, "from '@/views/sections/$1'");
    content = content.replace(/from\s+['"]\.\/components\/(.*)['"]/g, (match, p1) => {
        const uiComponents = ['Layout', 'Navigation', 'Footer'];
        const name = p1.replace('.tsx', '');
        return uiComponents.includes(name) ? `from '@/ui/${p1}'` : `from '@/shared/components/${p1}'`;
    });
    content = content.replace(/from\s+['"]\.\/sections\/(.*)['"]/g, "from '@/views/sections/$1'");

    // App & Layout specific fixes
    if (file.includes('App.tsx') || file.includes('main.tsx')) {
      content = content.replace(/from '.\/components\//g, "from '@/shared/components/");
      content = content.replace(/from '.\/pages\//g, "from '@/views/pages/");
      content = content.replace(/from '.\/App.tsx'/g, "from '@/app/App'");
      content = content.replace(/from '.\/index.css'/g, "from '@/index.css'");
      content = content.replace(/from '.\/contexts\//g, "from '@/contexts/");
    }
    
    // Layout and View fixes
    if (file.includes('Layout.tsx')) {
       content = content.replace(/from '.\/Navigation'/g, "from '@/ui/Navigation'");
       content = content.replace(/from '.\/Footer'/g, "from '@/ui/Footer'");
       content = content.replace(/from '.\/WhatsAppWidget'/g, "from '@/shared/components/WhatsAppWidget'");
       content = content.replace(/from '.\/BookVisitWidget'/g, "from '@/shared/components/BookVisitWidget'");
    }

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed imports in', file);
    }
  });
});
