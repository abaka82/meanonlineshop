/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Product from '../api/product/product.model';

Product.find({}).remove()
  .then(() => {
    Product.create({
      "ISBN": "ISBN 90-70002-31-1",
      "Title" : "DK: My First Incredible Amazing Dictionary",
      "Author" : "DK",
      "Description" : "Sounds, narration and lively animation make this dictionary a lively interactive tour that far surpasses the teaching capability of traditional dictionaries in book form. Students will be guided through the world of words in an entirely fresh and exciting way with each word having a big, simple, colorful screen, complete with its own definition, illustration, sound and animation. In addition children will learn about opposites, synonyms, word groups and other vocabulary elements, all keys to connecting children to written and spoken words to empower them with good, strong vocabularies and firstrate reading comprehension capability—THE key to success in school in all curriculum categories.",
      "Category" : "Education",
      "Price" : 125,
      "Stock" : 10,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/PSRzNuSAQhDF8iTOn7jNQnU0.jpg"  
    }, {
      "ISBN": "ISBN 90-70002-31-2",
      "Title" : "DK Eyewitness Travel Guide: Japan",
      "Author" : "DK Travel",
      "Description" : "DK Eyewitness Travel's full-color guidebooks to hundreds of destinations around the world truly show you what others only tell you. They have become renowned for their visual excellence, which includes unparalleled photography, 3-D mapping, and specially commissioned cutaway illustrations. DK Eyewitness Travel Guides are the only guides that work equally well for inspiration, as a planning tool, a practical resource while traveling, and a keepsake following any trip.",
      "Category" : "Travel",
      "Price" : 200,
      "Stock" : 15,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/IDWJJOQL9zHTCiz-WmMqhvLm.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-3",
      "Title" : "DK Eyewitness Travel Guide - Jerusalem, Israel, Petra, and Sinai",
      "Author" : "DK Eyewitness Travel Guide",
      "Description" : "The DK Eyewitness Jerusalem, Israel, Petra & Sinai Travel Guide\" will lead you straight to the best attractions the country has to offer. From the green hills and sun-drenched coast of Galilee to the sacred sites of Jerusalem's Old City, the dramatic desert of Wadi Rum to the vibrant reefs of Dahab; this guide provides all the insider tips every visitor needs. \"The DK Eyewitness Jerusalem, Israel, Petra & Sinai Travel Guide\" includes comprehensive listings of the best hotels, restaurants, shops and nightlife for all budgets, and detailed street maps to help you get around",
      "Category" : "Travel",
      "Price" : 300,
      "Stock" : 3,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/_4ORvnaagYq4SepQ7taW1Y17.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-4",
      "Title" : "DK Travel Eyewitness - Top 10 Dublin",
      "Author" : "Polly Phillimore",
      "Description" : "Drawing on the same standards of accuracy as the acclaimed DK Eyewitness Travel Guides, The DK Top 10 Guides use exciting colorful photography and excellent cartography to provide a reliable and useful pocket-sized travel. Dozens of Top 10 lists provide vital information on each destination, as well as insider tips, from avoiding the crowds to finding out the freebies, The DK Top 10 Guides take the work out of planning any trip.",
      "Category" : "Travel",
      "Price" : 120,
      "Stock" : 2,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/95I3PweXzcgXXeaWnkm2-e1-.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-5",
      "Title" : "The Sherlock Holmes Book (Big Ideas Simply Explained)",
      "Author" : "DK Publishing",
      "Description" : "The Sherlock Holmes Book is packed with witty illustrations, clear graphics, and memorable quotes that make it the perfect Sherlock Holmes guide, covering every case of the world's greatest detective, from A Study in Scarlet to The Adventure of Shoscombe Old Place, placing the stories in a wider context. Stories include at-a-glance flowcharts that show how Holmes reaches his conclusions through deductive reasoning, and character guides provide handy reference for readers and an invaluable resource for fans of the Sherlock Holmes films and TV series.",
      "Category" : "Learning",
      "Price" : 2500,
      "Stock" : 9,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/jeQMvEL_xaQgIKfAUojCPGMx.jpg"
    }, {
      "ISBN": "ISBN 90-70002-31-6",
      "Title" : "Dating For Dummies",
      "Author" : "Dr. Joy Browne",
      "Description" : "If you think dating is a simple process–meet someone, ask him or her for a date or get asked out yourself, try not to come off as a drooling moron, then arrange to get together for a second date or cut your losses and work to meet someone else–well, lucky you. For many people, it's far more complicated than that, and Dr. Joy Browne addresses those complexities in Dating for Dummies. Exactly how do you meet a potential date? How do you present yourself in the most favorable light? How do you negotiate that first date? (One interesting story Browne tells is of a couple who negotiated a weekend together, deciding whether or not they'd have sex, and under what conditions they'd consider marriage and children–all before their first date.) And how do you proceed from there? The process still comes down to chemistry, but Browne shows how many ways there are to make sure you get your best possible chance with Mr./Ms. Right",
      "Category" : "Personality",
      "Price" : 56,
      "Stock" : 23,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/8ZvYNI099sByiUfSmuMewbxl.jpg"
    }, {
      "ISBN": "ISBN 90-70002-31-7",
      "Title" : "The Complete Sherlock Holmes",
      "Author" : "Sir Arthur Conan Doyle",
      "Description" : "Full-length novels and 56 short stories chronicling the colorful adventures of Sherlock Holmes--every word Sir Arthur Conan Doyle ever wrote about Baker Street's most famous resident",
      "Category" : "Novels",
      "Price" : 1000,
      "Stock" : 15,
      "Status" : "Unavailable",
      "imageUrl" : "/assets/uploads/product/5N1mrHCDQbiz92Pt4bm_Tdcg.jpg"
    }, {
      "ISBN": "ISBN 90-70002-31-8",
      "Title" : "MEAN Machine - A beginner's practical guide to the JavaScript stack",
      "Author" : "Chris Sevilleja AND Holly Lloyd",
      "Description" : "In this book, we will be learning about four pieces of software (MongoDB, ExpressJS, AngularJS, and Node.js) and how they combine to make the great MEAN stack.  This book is suitable for beginners with no Angular or Node experience. Only a very basic knowledge of HTML and JavaScript is necessary.",
      "Category" : "Web programming",
      "Price" : 400,
      "Stock" : 7,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/ZzIHUyjUQyj8ww4NyiUhbFug.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-9",
      "Title" : "Code Complete - A Practical Handbook of Software Construction, Second Edition",
      "Author" : "Steve McConnell",
      "Description" : "Widely considered one of the best practical guides to programming, Steve McConnell’s original CODE COMPLETE has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices—and hundreds of new code samples—illustrating the art and science of software construction. Capturing the body of knowledge available from research, academia, and everyday commercial practice, McConnell synthesizes the most effective techniques and must-know principles into clear, pragmatic guidance. No matter what your experience level, development environment, or project size, this book will inform and stimulate your thinking—and help you build the highest quality code.",
      "Category" : "General programming",
      "Price" : 500,
      "Stock" : 30,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/9b1ZJgFLKRFM_Re329sOPupU.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-32-1",
      "Title" : "Game Coding Complete 3rd Edition",
      "Author" : "Mike McShaffry",
      "Description" : "Welcome to \"Game Coding Complete, Third Edition,\" the newest edition of the essential, hands-on guide to developing commercial-quality games. Written by a veteran game programmer, the book examines the entire game development process and all the unique challenges associated with creating a game",
      "Category" : "Game programming",
      "Price" : 500,
      "Stock" : 2,
      "Status" : "Unavailable",
      "imageUrl" : "/assets/uploads/product/lo5elFNgwlnpchvehVOk2dhG.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-32-2",
      "Title" : "Patterns in Java - A Catalog of Reusable Design Patterns Illustrated with UML, 2nd Edition, Volume 1",
      "Author" : "Mark Grand",
      "Description" : "This is the best book on patterns since the Gang of Four's Design Patterns. The book manages to be a resource for three of the most important trends in professional programming: Patterns, Java, and UML",
      "Category" : "General programming",
      "Price" : 350,
      "Stock" : 6,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/jZ4GAzGVK0hZhzaS4YrPvRMY.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-32-3",
      "Title" : "Introduction to Career Counselling & Coaching",
      "Author" : "Mark Grand",
      "Description" : "This book offers a practical introduction for those training in the field of career development, career counselling and career coaching, this book will take your students through established and emerging theory and the different contexts in which career work takes place introducing the key skills, techniques and models they'll need. Professional issues such as the use of digital technologies highlight the contemporary context of careers work and all of this is brought to life through engaging case studies and reflective questions, highlighting the practical applications of what is being learnt.",
      "Category" : "Paperback",
      "Price" : 41424,
      "Stock" : 15,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/career counselling.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-4",
      "Title" : "The Anatomy Coloring Book",
      "Author" : "Wynn Kapit, Lawrence M. Elson",
      "Description" : "Why use this coloring book?   For more than 35 years, The Anatomy Coloring Book has been the #1 best-selling human anatomy coloring book! A useful tool for anyone with an interest in learning anatomical structures, this concisely written text features precise, extraordinary hand-drawn figures that were crafted especially for easy coloring and interactive study. Organized according to body systems, each of the 162 two-page spreads  featured in this book includes an ingenious color-key system where anatomical terminology is linked to detailed illustrations of the structures of the body. When you color to learn with The Anatomy Coloring Book, you make visual associations with key terminology, and assimilate information while engaging in kinesthetic learning. Studying anatomy is made easy and fun!   The Fourth Edition features user-friendly two-page spreads with enlarged art, clearer, more concise text descriptions, and new boldface headings that make this classic coloring book accessible to a wider range of learners.",
      "Category" : "Paperback",
      "Price" : 77788,
      "Stock" : 100,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/anatomycoloring.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-5",
      "Title" : "Illusion Town",
      "Author" : "Jayne Castle",
      "Description" : "A new adventure begins on Harmony With its opulent casinos and hotels, the desert city of Illusion Town is totally unique and will take you on a thrill ride you ll never forget. Hannah West isn t the first woman to wake up in Illusion Town married to a man she barely knows, but she has no memory of the ceremony at all. For that matter, neither does Elias Coppersmith, her new husband. All either can remember is that they were on the run With Hannah s dubious background and shaky para-psych profile, she could have done much worse. The cooly competent mining heir arouses her curiosity as well as other parts of her mind and body. And even her dust bunny likes him. But a honeymoon spent retracing their footsteps leads Hannah and Elias into the twisting underground catacombs, where secrets from both their pasts will come to light and where the energy of their clashing auras will grow hot enough to burn ",
      "Category" : "Romance",
      "Price" : 344,
      "Stock" : 65,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/illusiontown.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-6",
      "Title" : "The Martian",
      "Author" : "Andy Weir",
      "Description" : "I'm stranded on Mars. I have no way to communicate with Earth. I'm in a Habitat designed to last 31 days. If the Oxygenator breaks down, I'll suffocate. If the Water Reclaimer breaks down, I'll die of thirst. If the Hab breaches, I'll just kind of explode. If none of those things happen, I'll eventually run out of food and starve to death. So yeah. I'm screwed. The Sunday Times Bestseller and Richard and Judy Book Club Selection behind the major new film from Ridley Scott starring Matt Damon and Jessica Chastain.",
      "Category" : "Science Fiction",
      "Price" : 212,
      "Stock" : 45,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/The Martian.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-7",
      "Title" : "Saga: V. 3",
      "Author" : "Brian K. Vaughan, Fiona Staples",
      "Description" : "The Eisner, Harvey, and Hugo Award-winning phenomenon continues, as new parents Marko and Alana travel to an alien world to visit their hero, while the family's pursuers finally close in on their targets.",
      "Category" : "Science Fiction",
      "Price" : 34,
      "Stock" : 2,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/saga.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-8",
      "Title" : "World War Z : An Oral History of the Zombie War",
      "Author" : "Max Brooks",
      "Description" : "NOW A MAJOR MOTION PICTURE We survived the zombie apocalypse, but how many of us are still haunted by that terrible time? We have (temporarily?) defeated the living dead, but at what cost? Told in the haunting and riveting voices of the men and women who witnessed the horror firsthand, 'World War Z,' now a #1 'New York Times' bestseller, is the only record of the plague years.",
      "Category" : "Science Fiction",
      "Price" : 76,
      "Stock" : 5,
      "Status" : "Available",
      "imageUrl" : "/assets/uploads/product/worldwarz.jpg"
    })
    .then(() => {
      console.log('finished populating products');
    });
  });
  
  
/*Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });*/

/*User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      firstname: 'Admin',
      lastname: 'admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });*/
