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
      "imageUrl1" : "/assets/uploads/product/PSRzNuSAQhDF8iTOn7jNQnU0.jpg"  
    }, {
      "ISBN": "ISBN 90-70002-31-2",
      "Title" : "DK Eyewitness Travel Guide: Japan",
      "Author" : "DK Travel",
      "Description" : "DK Eyewitness Travel's full-color guidebooks to hundreds of destinations around the world truly show you what others only tell you. They have become renowned for their visual excellence, which includes unparalleled photography, 3-D mapping, and specially commissioned cutaway illustrations. DK Eyewitness Travel Guides are the only guides that work equally well for inspiration, as a planning tool, a practical resource while traveling, and a keepsake following any trip.",
      "Category" : "Travel",
      "Price" : 200,
      "Stock" : 15,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/IDWJJOQL9zHTCiz-WmMqhvLm.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-3",
      "Title" : "DK Eyewitness Travel Guide - Jerusalem, Israel, Petra, and Sinai",
      "Author" : "DK Eyewitness Travel Guide",
      "Description" : "The DK Eyewitness Jerusalem, Israel, Petra & Sinai Travel Guide\" will lead you straight to the best attractions the country has to offer. From the green hills and sun-drenched coast of Galilee to the sacred sites of Jerusalem's Old City, the dramatic desert of Wadi Rum to the vibrant reefs of Dahab; this guide provides all the insider tips every visitor needs. \"The DK Eyewitness Jerusalem, Israel, Petra & Sinai Travel Guide\" includes comprehensive listings of the best hotels, restaurants, shops and nightlife for all budgets, and detailed street maps to help you get around",
      "Category" : "Travel",
      "Price" : 300,
      "Stock" : 3,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/_4ORvnaagYq4SepQ7taW1Y17.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-4",
      "Title" : "DK Travel Eyewitness - Top 10 Dublin",
      "Author" : "Polly Phillimore",
      "Description" : "Drawing on the same standards of accuracy as the acclaimed DK Eyewitness Travel Guides, The DK Top 10 Guides use exciting colorful photography and excellent cartography to provide a reliable and useful pocket-sized travel. Dozens of Top 10 lists provide vital information on each destination, as well as insider tips, from avoiding the crowds to finding out the freebies, The DK Top 10 Guides take the work out of planning any trip.",
      "Category" : "Travel",
      "Price" : 120,
      "Stock" : 2,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/95I3PweXzcgXXeaWnkm2-e1-.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-5",
      "Title" : "The Sherlock Holmes Book (Big Ideas Simply Explained)",
      "Author" : "DK Publishing",
      "Description" : "The Sherlock Holmes Book is packed with witty illustrations, clear graphics, and memorable quotes that make it the perfect Sherlock Holmes guide, covering every case of the world's greatest detective, from A Study in Scarlet to The Adventure of Shoscombe Old Place, placing the stories in a wider context. Stories include at-a-glance flowcharts that show how Holmes reaches his conclusions through deductive reasoning, and character guides provide handy reference for readers and an invaluable resource for fans of the Sherlock Holmes films and TV series.",
      "Category" : "Learning",
      "Price" : 2500,
      "Stock" : 9,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/jeQMvEL_xaQgIKfAUojCPGMx.jpg"
    }, {
      "ISBN": "ISBN 90-70002-31-6",
      "Title" : "Dating For Dummies",
      "Author" : "Dr. Joy Browne",
      "Description" : "If you think dating is a simple process–meet someone, ask him or her for a date or get asked out yourself, try not to come off as a drooling moron, then arrange to get together for a second date or cut your losses and work to meet someone else–well, lucky you. For many people, it's far more complicated than that, and Dr. Joy Browne addresses those complexities in Dating for Dummies. Exactly how do you meet a potential date? How do you present yourself in the most favorable light? How do you negotiate that first date? (One interesting story Browne tells is of a couple who negotiated a weekend together, deciding whether or not they'd have sex, and under what conditions they'd consider marriage and children–all before their first date.) And how do you proceed from there? The process still comes down to chemistry, but Browne shows how many ways there are to make sure you get your best possible chance with Mr./Ms. Right",
      "Category" : "Personality",
      "Price" : 56,
      "Stock" : 23,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/8ZvYNI099sByiUfSmuMewbxl.jpg"
    }, {
      "ISBN": "ISBN 90-70002-31-7",
      "Title" : "The Complete Sherlock Holmes",
      "Author" : "Sir Arthur Conan Doyle",
      "Description" : "Full-length novels and 56 short stories chronicling the colorful adventures of Sherlock Holmes--every word Sir Arthur Conan Doyle ever wrote about Baker Street's most famous resident",
      "Category" : "Novels",
      "Price" : 1000,
      "Stock" : 15,
      "Status" : "Unavailable",
      "imageUrl1" : "/assets/uploads/product/5N1mrHCDQbiz92Pt4bm_Tdcg.jpg"
    }, {
      "ISBN": "ISBN 90-70002-31-8",
      "Title" : "MEAN Machine - A beginner's practical guide to the JavaScript stack",
      "Author" : "Chris Sevilleja AND Holly Lloyd",
      "Description" : "In this book, we will be learning about four pieces of software (MongoDB, ExpressJS, AngularJS, and Node.js) and how they combine to make the great MEAN stack.  This book is suitable for beginners with no Angular or Node experience. Only a very basic knowledge of HTML and JavaScript is necessary.",
      "Category" : "Web programming",
      "Price" : 400,
      "Stock" : 7,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/ZzIHUyjUQyj8ww4NyiUhbFug.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-31-9",
      "Title" : "Code Complete - A Practical Handbook of Software Construction, Second Edition",
      "Author" : "Steve McConnell",
      "Description" : "Widely considered one of the best practical guides to programming, Steve McConnell’s original CODE COMPLETE has been helping developers write better software for more than a decade. Now this classic book has been fully updated and revised with leading-edge practices—and hundreds of new code samples—illustrating the art and science of software construction. Capturing the body of knowledge available from research, academia, and everyday commercial practice, McConnell synthesizes the most effective techniques and must-know principles into clear, pragmatic guidance. No matter what your experience level, development environment, or project size, this book will inform and stimulate your thinking—and help you build the highest quality code.",
      "Category" : "General programming",
      "Price" : 500,
      "Stock" : 30,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/9b1ZJgFLKRFM_Re329sOPupU.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-32-1",
      "Title" : "Game Coding Complete 3rd Edition",
      "Author" : "Mike McShaffry",
      "Description" : "Welcome to \"Game Coding Complete, Third Edition,\" the newest edition of the essential, hands-on guide to developing commercial-quality games. Written by a veteran game programmer, the book examines the entire game development process and all the unique challenges associated with creating a game",
      "Category" : "Game programming",
      "Price" : 500,
      "Stock" : 2,
      "Status" : "Unavailable",
      "imageUrl1" : "/assets/uploads/product/lo5elFNgwlnpchvehVOk2dhG.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-32-2",
      "Title" : "Patterns in Java - A Catalog of Reusable Design Patterns Illustrated with UML, 2nd Edition, Volume 1",
      "Author" : "Mark Grand",
      "Description" : "This is the best book on patterns since the Gang of Four's Design Patterns. The book manages to be a resource for three of the most important trends in professional programming: Patterns, Java, and UML",
      "Category" : "General programming",
      "Price" : 350,
      "Stock" : 6,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/jZ4GAzGVK0hZhzaS4YrPvRMY.jpeg"
    }, {
      "ISBN": "ISBN 90-70002-32-3",
      "Title" : "Introduction to Career Counselling & Coaching",
      "Author" : "Mark Grand",
      "Description" : "This book offers a practical introduction for those training in the field of career development, career counselling and career coaching, this book will take your students through established and emerging theory and the different contexts in which career work takes place introducing the key skills, techniques and models they'll need. Professional issues such as the use of digital technologies highlight the contemporary context of careers work and all of this is brought to life through engaging case studies and reflective questions, highlighting the practical applications of what is being learnt.",
      "Category" : "Paperback",
      "Price" : 41424,
      "Stock" : 15,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/career counselling.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-4",
      "Title" : "The Anatomy Coloring Book",
      "Author" : "Wynn Kapit, Lawrence M. Elson",
      "Description" : "Why use this coloring book?   For more than 35 years, The Anatomy Coloring Book has been the #1 best-selling human anatomy coloring book! A useful tool for anyone with an interest in learning anatomical structures, this concisely written text features precise, extraordinary hand-drawn figures that were crafted especially for easy coloring and interactive study. Organized according to body systems, each of the 162 two-page spreads  featured in this book includes an ingenious color-key system where anatomical terminology is linked to detailed illustrations of the structures of the body. When you color to learn with The Anatomy Coloring Book, you make visual associations with key terminology, and assimilate information while engaging in kinesthetic learning. Studying anatomy is made easy and fun!   The Fourth Edition features user-friendly two-page spreads with enlarged art, clearer, more concise text descriptions, and new boldface headings that make this classic coloring book accessible to a wider range of learners.",
      "Category" : "Paperback",
      "Price" : 77788,
      "Stock" : 100,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/anatomycoloring.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-5",
      "Title" : "Illusion Town",
      "Author" : "Jayne Castle",
      "Description" : "A new adventure begins on Harmony With its opulent casinos and hotels, the desert city of Illusion Town is totally unique and will take you on a thrill ride you ll never forget. Hannah West isn t the first woman to wake up in Illusion Town married to a man she barely knows, but she has no memory of the ceremony at all. For that matter, neither does Elias Coppersmith, her new husband. All either can remember is that they were on the run With Hannah s dubious background and shaky para-psych profile, she could have done much worse. The cooly competent mining heir arouses her curiosity as well as other parts of her mind and body. And even her dust bunny likes him. But a honeymoon spent retracing their footsteps leads Hannah and Elias into the twisting underground catacombs, where secrets from both their pasts will come to light and where the energy of their clashing auras will grow hot enough to burn ",
      "Category" : "Romance",
      "Price" : 344,
      "Stock" : 65,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/illusiontown.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-6",
      "Title" : "The Martian",
      "Author" : "Andy Weir",
      "Description" : "I'm stranded on Mars. I have no way to communicate with Earth. I'm in a Habitat designed to last 31 days. If the Oxygenator breaks down, I'll suffocate. If the Water Reclaimer breaks down, I'll die of thirst. If the Hab breaches, I'll just kind of explode. If none of those things happen, I'll eventually run out of food and starve to death. So yeah. I'm screwed. The Sunday Times Bestseller and Richard and Judy Book Club Selection behind the major new film from Ridley Scott starring Matt Damon and Jessica Chastain.",
      "Category" : "Science Fiction",
      "Price" : 212,
      "Stock" : 45,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/The Martian.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-7",
      "Title" : "Saga: V. 3",
      "Author" : "Brian K. Vaughan, Fiona Staples",
      "Description" : "The Eisner, Harvey, and Hugo Award-winning phenomenon continues, as new parents Marko and Alana travel to an alien world to visit their hero, while the family's pursuers finally close in on their targets.",
      "Category" : "Science Fiction",
      "Price" : 34,
      "Stock" : 2,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/saga.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-8",
      "Title" : "World War Z : An Oral History of the Zombie War",
      "Author" : "Max Brooks",
      "Description" : "NOW A MAJOR MOTION PICTURE We survived the zombie apocalypse, but how many of us are still haunted by that terrible time? We have (temporarily?) defeated the living dead, but at what cost? Told in the haunting and riveting voices of the men and women who witnessed the horror firsthand, 'World War Z,' now a #1 'New York Times' bestseller, is the only record of the plague years.",
      "Category" : "Science Fiction",
      "Price" : 76,
      "Stock" : 5,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/worldwarz.jpg"
    }, {
      "ISBN": "ISBN 90-70002-32-9",
      "Title" : "Percy Jackson and the Lightning Thief: The Graphic Novel: Bk. 1",
      "Author" : "Rick Riordan",
      "Description" : "Look, I didn't want to be a half-blood. I never asked to be the son of a Greek God. I was just a normal kid, going to school, playing basketball, skateboarding. The usual. Until I accidentally vaporized my maths teacher. That's when things started really going wrong. Now I spend my time fighting with swords, battling monsters with my friends, and generally trying to stay alive. This is the one where Zeus, God of the Sky, thinks I've stolen his lightning bolt - and making Zeus angry is a very bad idea. Can Percy find the lightning bolt before a fully-fledged war of the Gods erupts?",
      "Category" : "Graphic Novels",
      "Price" : 120.23,
      "Stock" : 15,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/percy.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-1",
      "Title" : "The Walking Dead Compendium: Volume 2",
      "Author" : "Robert Kirkman",
      "Description" : "Returning with the second eight volumes of the fan - favorite, ''New York Times' bestseller series, 'The Walking Dead', collected into one massive paperback collection! This is the perfect collection for any fan of the Emmy Award-winning television series on AMC: over one-thousand pages chronicling the next chapter of Robert Kirkman's Eisner Award-winning continuing story of survival horror - beginning with Rick Grimes' struggle to survive after the prison raid, to the group's finding short solace in The Community, and the devastation that follows. In a world ruled by the dead, we are finally forced to finally start living. Collects 'The Walking Dead #49-96'.",
      "Category" : "Graphic Novels",
      "Price" : 187.64,
      "Stock" : 123,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/walkingdead.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-2",
      "Title" : "Deadpool Kills The Marvel Universe",
      "Author" : "Cullen Bunn , Dalibor Talajic",
      "Description" : "What if everything you thought was funny about Deadpool was actually just disturbing? What if he decided to kill everyone and everything that makes up the Marvel Universe? What if he actually pulled it off? Would that be FUN for you? The Merc with a Mouth takes a turn for the twisted in a horror comic like no other! Collecting DEADPOOL KILLS THE MARVEL UNIVERSE #1-4.",
      "Category" : "Graphic Novels",
      "Price" : 144.13,
      "Stock" : 104,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/deadpool.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-3",
      "Title" : "Wolverine: Omnibus",
      "Author" : "Mark Millar",
      "Description" : "Superstar writer Mark (KICK-ASS, ULTIMATES) Millar's two classic Wolverine epics are collected in one gorgeously illustrated hardcover! When Wolverine is brainwashed by Hand ninjas, he slices and dices his way through friends and foes alike, carving a swath of terror through the Marvel Universe - and ultimately resulting in an X-Man's death! Finally captured and deprogrammed, Wolverine swears vengeance against his tormentors...and the vengeance of Wolverine is a wonder to behold. Then: nobody knows what happened the night the heroes fell, but the bad guys have been calling the shots ever since. What happened to Wolverine is the biggest mystery of all. For 50 years, no one has heard from him...and in his place stands an old man called Logan. All-out action from the mind of Mark Millar! COLLECTING: Wolverine 20-32, Wolverine 66-72, Wolverine Giant -Size Old Man Logan",
      "Category" : "Graphic Novels",
      "Price" : 152.87,
      "Stock" : 45,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/wolverine.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-4",
      "Title" : "The Dressmaker",
      "Author" : "Rosalie Ham",
      "Description" : "Tilly Dunnage left her hometown of Dungatar in rural Australia under a black cloud of accusation. Years later Tilly, now a couturier for the Paris fashion houses, returns home to make amends with her mentally unstable mother. Mid-century Dungatar is a small town, and small towns have long memories. At first she wins over the suspicious locals with her extraordinary dressmaking skills. But when the eccentric townsfolk turn on Tilly for a second time, she decides to teach them a lesson and exact long-overdue revenge...Packed with memorable characters, acid humour and luscious clothes, The Dressmaker is an irresistible gothic tale of small-town revenge.",
      "Category" : "Historical Fiction",
      "Price" : 124.61,
      "Stock" : 15,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/dressmaker.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-5",
      "Title" : "The Hypnotist's Love Story",
      "Author" : "Liane Moriarty",
      "Description" : "How far would you go to keep the man of your dreams? From Liane Moriarty, the author of What Alice Forgot, The Hypnotist's Love Story is a stunning novel about love, life and knowing where to draw the line...Hypnotherapist Ellen is fascinated by what makes people tick. So when she falls in love with Patrick, the fact that he has a stalker doesn't faze her in the slightest. If anything it intrigues her, and the more she hears about Saskia, the more she wants to meet this woman. But what Ellen doesn't know is that they've already met...Saskia has been posing as one of Ellen's clients. Unable to let go of the life she so abruptly lost, she wants to know everything about the woman who took her place. And the further she inches her way into Ellen's world, the more trouble she stirs up. Ellen's love story is about to take an unexpected turn. But it's not only Saskia who doesn't know where to stop: Ellen also has to ask herself what lines she's prepared to cross to get the happy ending she's always wanted. Thought-provoking, sympathetic and smart, Liane Moriarty's The Hypnotist's Love Story is a novel for anyone who's ever loved, lost or found it hard to let go. Praise for What Alice Forgot: 'Gripping, thought-provoking and funny'. (Marie Claire). 'The perfect holiday read'. (She Magazine). 'A call to embrace life'. (Easy Living).",
      "Category" : "Contemporary Fiction",
      "Price" : 165.19,
      "Stock" : 20,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/hypnotist.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-6",
      "Title" : "The Ladybird Book of the Hangover",
      "Author" : "Jason Hazeley , Joel Morris",
      "Description" : "From bestselling authors Jason Hazeley and Joel Morris - a nugget of wisdom in the phenomenal Ladybirds for Grown Ups series. This delightful book is the latest in the series of Ladybird books which have been specially planned to help grown-ups with the world about them. The large clear script, the careful choice of words, the frequent repetition and the thoughtful matching of text with pictures all enable grown-ups to think they have taught themselves to cope. Featuring original Ladybird artwork alongside brilliantly funny, brand new text. Also available: How it Works: The Husband How it Works: The Wife How it Works: The Mum The Ladybird Book of the Mid-Life Crisis The Ladybird Book of the Hangover The Ladybird Book of Mindfulness The Ladybird Book of the Shed The Ladybird Book of Dating The Ladybird Book of the Hipster",
      "Category" : "Parodies & Spoofs",
      "Price" : 112.30,
      "Stock" : 57,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/ladybird.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-7",
      "Title" : "Originals : How Non-Conformists Change the World",
      "Author" : "Adam Grant",
      "Description" : "New York Times Bestseller! 'Originals is one of the most important and captivating books I have ever read, full of surprising and powerful ideas. It will not only change the way you see the world; it might just change the way you live your life. And it could very well inspire you to change your world.' (Sheryl Sandberg, bestselling author of Lean In). The New York Times bestselling author examines how people can drive creative, moral, and organisational progress - and how leaders can encourage originality in their organisations. How can we originate new ideas, policies and practices without risking it all? Adam Grant shows how to improve the world by championing novel ideas and values that go against the grain, battling conformity, and bucking outdated traditions. Using surprising studies and stories spanning business, politics, sports, and entertainment, Grant explores how to recognize a good idea, speak up without getting silenced, build a coalition of allies, choose the right time to act, and manage fear and doubt. Parents will show more",
      "Category" : "Management: Leadership & Motivation",
      "Price" : 237.88,
      "Stock" : 38,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/originals.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-8",
      "Title" : "The Kinfolk Home",
      "Author" : "Nathan Williams",
      "Description" : "Interest in home design has been on the rise for some time, but Kinfolk's focus on slowing down and creating a more intentional, beautiful home is where the attention is shifting. Through luscious photographs and insightful interviews, the author takes us into 40 homes around the world, from the Americas to Europe, Asia to Africa, ending in Australia. The homes range from an old cabin in the woods to clean-lined modern apartments, from singles living in small spaces to sprawling, multi-generational houses in the country. Each will feel unmistakably Kinfolk.",
      "Category" : "Interior Design, Decor & Style Guides",
      "Price" : 59.38,
      "Stock" : 38,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/kinfolk.jpg"
    }, {
      "ISBN": "ISBN 90-70002-33-9",
      "Title" : "Monochrome Home : Elegant Interiors in Black and White",
      "Author" : "Hilary Robertson",
      "Description" : "Sought-after interiors stylist Hilary Robertson celebrates the stylish simplicity of the monochromatic home - elegant interiors in black, white, and every shade of grey in between. In the first chapter, Living in Black and White, Hilary analyzes successful monochrome interiors, providing moodboards for different schemes. Next, In the Mix takes a closer look at the effective tools of texture, light, and scale and pattern and the roles that they have to play. The third chapter, The Dark Room, visits real homes that feature darker monochrome palettes, while, following on, Let there be Light provides examples of homes with a whiter, brighter approach. Finally, in Monochrome Home Hilary Robertson shows how to bring the look right up to date, visiting the fabulously inspiring homes of artists and designers from Europe to the US.",
      "Category" : "Interior Design, Decor & Style Guides",
      "Price" : 55.73,
      "Stock" : 97,
      "Status" : "Available",
      "imageUrl1" : "/assets/uploads/product/Monochrome.jpg"
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
