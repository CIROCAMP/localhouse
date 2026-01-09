import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

async function main() {
  const conn = await mysql.createConnection(process.env.DATABASE_URL!);
  
  // Read MEWS contacts
  const mewsPath = '/home/ubuntu/upload/contacts_MEWS.csv';
  const mewsData = fs.readFileSync(mewsPath, 'utf8');
  const mewsLines = mewsData.split('\n').slice(1).filter(l => l.trim());
  
  console.log(`Importing ${mewsLines.length} MEWS contacts...`);
  
  let mewsImported = 0;
  let mewsSkipped = 0;
  
  for (const line of mewsLines) {
    const [email, first_name, last_name, phone, source] = line.split(',').map(s => s.trim().replace(/^"|"$/g, ''));
    if (!email || email === 'email') continue;
    
    try {
      await conn.execute(
        `INSERT INTO newsletter_subscribers (email, first_name, last_name, phone, source, subscribed, created_at, updated_at)
         VALUES (?, ?, ?, ?, 'mews', 1, NOW(), NOW())
         ON DUPLICATE KEY UPDATE updated_at = NOW()`,
        [email.toLowerCase(), first_name || null, last_name || null, phone || null]
      );
      mewsImported++;
    } catch (e: any) {
      mewsSkipped++;
    }
  }
  
  console.log(`MEWS: ${mewsImported} imported, ${mewsSkipped} skipped`);
  
  // Read Bento Box contacts (full list)
  const bentoPath = '/home/ubuntu/upload/contacts_BENTOBOX.csv';
  const bentoData = fs.readFileSync(bentoPath, 'utf8');
  const bentoLines = bentoData.split('\n').slice(1).filter(l => l.trim());
  
  console.log(`Importing ${bentoLines.length} Bento Box contacts...`);
  
  let bentoImported = 0;
  let bentoSkipped = 0;
  
  for (const line of bentoLines) {
    const [email, first_name, last_name, phone, source] = line.split(',').map(s => s.trim().replace(/^"|"$/g, ''));
    if (!email || email === 'email') continue;
    
    try {
      await conn.execute(
        `INSERT INTO newsletter_subscribers (email, first_name, last_name, phone, source, subscribed, created_at, updated_at)
         VALUES (?, ?, ?, ?, 'bento_box', 1, NOW(), NOW())
         ON DUPLICATE KEY UPDATE 
           first_name = COALESCE(NULLIF(?, ''), first_name),
           last_name = COALESCE(NULLIF(?, ''), last_name),
           phone = COALESCE(NULLIF(?, ''), phone),
           updated_at = NOW()`,
        [email.toLowerCase(), first_name || null, last_name || null, phone || null, first_name || null, last_name || null, phone || null]
      );
      bentoImported++;
    } catch (e: any) {
      bentoSkipped++;
    }
  }
  
  console.log(`Bento Box: ${bentoImported} imported, ${bentoSkipped} skipped`);
  
  // Get final counts
  const [rows] = await conn.execute('SELECT source, COUNT(*) as count FROM newsletter_subscribers GROUP BY source ORDER BY count DESC');
  console.log('\nFinal counts by source:');
  (rows as any[]).forEach(r => console.log(`  ${r.source}: ${r.count}`));
  
  const [total] = await conn.execute('SELECT COUNT(*) as total FROM newsletter_subscribers');
  console.log(`\nTOTAL: ${(total as any[])[0].total}`);
  
  await conn.end();
}

main().catch(console.error);
