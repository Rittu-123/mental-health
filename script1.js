document.getElementById('generateBtn').addEventListener('click', function() {
    var emotion = document.getElementById('emotionSelect').value;
    generateSuggestions(emotion);
});

function generateSuggestions(emotion) {
    // Example data with quotes from various sources
    var quotes = {
        heartbreak: [
            '“The saddest thing about love is that not only the love cannot last forever, but even the heartbreak is soon forgotten.” – William Faulkner',
            '“Hearts can break. Yes, hearts can break. Sometimes I think it would be better if we died when they did, but we don’t.” – Stephen King',
            '“It is strange how often a heart must be broken before the years can make it wise.” – Sara Teasdale',
            '“Don’t cry when the sun is gone because the tears won’t let you see the stars.” – Violeta Parra',
            '“The emotion that can break your heart is sometimes the very one that heals it...” – Nicholas Sparks'
            // Add more quotes for other emotions or from different sources
        ],
        anxiety: [
            '“Worrying does not take away tomorrow’s troubles, it takes away today’s peace.” - Randy Armstrong',
            '“You wouldn’t worry so much about what others think of you if you realized how seldom they do.” - Eleanor Roosevelt',
            '“The greatest weapon against stress is our ability to choose one thought over another.” - William James'
            // Add more quotes for anxiety
        ],
        depression: [
            '“The only thing more exhausting than having a mental illness is pretending not to have one.” - Unknown',
            '“Depression is like a heaviness that you can’t ever escape. It crushes down on you, making even the smallest things like tying your shoes or chewing on toast seem like a twenty-mile hike uphill. Depression is a part of you; it’s in your bones and your blood.” - Jasmine Warga',
            '“I am bent, but not broken. I am scarred, but not disfigured. I am sad, but not hopeless. I am tired, but not powerless. I am angry, but not bitter. I am depressed, but not giving up.” - Unknown'
            // Add more quotes for depression
        ],
        loneliness: [
            '“Loneliness and the feeling of being unwanted is the most terrible poverty.” - Mother Teresa',
            '“The eternal quest of human beings is to shatter his loneliness.” - Norman Cousins',
            '“Loneliness is and always has been the central and inevitable experience of every man.” - Thomas Wolfe'
            // Add more quotes for loneliness
        ],
        discouraged: [
            '“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill',
            '“Discouragement and failure are two of the surest stepping stones to success.” - Dale Carnegie',
            '“It’s not whether you get knocked down, it’s whether you get up.” - Vince Lombardi'
            // Add more quotes for feeling discouraged
        ],
        suicidal: [
            '“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela',
            '“When you feel like giving up, just remember the reason why you held on for so long.” - Unknown',
            '“You are never too old to set another goal or to dream a new dream.” - C.S. Lewis'
            // Add more quotes for dealing with suicidal thoughts
        ]
        // Add more quotes for other emotions
    };

    var musicSuggestions = {
        heartbreak: ['Heartbreak - https://open.spotify.com/track/5eZRFSO7pT47rSfENxnHIL?si=7ecaa9febd584653', 'heartbroken playlist mix - https://open.spotify.com/playlist/37i9dQZF1EIedQ968RBX8u?si=5e61985a7a274ddc', 'heartbroken - +https://open.spotify.com/playlist/7elN5FktdwHE5j2xDxp5V8?si=18f06c5f68684bc7'],
        anxiety: ['Anxiety Relief - https://open.spotify.com/playlist/4nQE6AY2YwnymjbGzH0wMs?si=59f0a505554f4710','Anti anxiety - https://open.spotify.com/playlist/0w5s4XtbzklMTO6RhwNvdg?si=9447084507714ac0','Binaural beats - https://open.spotify.com/playlist/29ETg7nhsjmiV7QadmjuEF?si=754aa92a1f1e444f','ease  my anxiety - https://open.spotify.com/playlist/3i4BugU13qH92dK65QZJFw?si=a95432426d074c89'],
        depression: ['depression - https://open.spotify.com/playlist/7MgZVRGT1iosWhf5K02R3S?si=261a20054aef44aa','anti-depression - https://open.spotify.com/playlist/5bAlBjyM86YkPIwumcfuUf?si=2a58aab320a443a5','depression songs - https://open.spotify.com/playlist/45b8BENXIe4jDTWjF54tQC?si=20ad8b8739f34e05'],
        discouraged: ['motivation - https://open.spotify.com/playlist/2fmxVDpboTzLaLAfj5ZaQW?si=ea16a2a240804f7b','great motivation - hits https://open.spotify.com/album/5zD4uXZyH360y6H7nBKD5w?si=l8OenahuSQy_kUKtvJkAvg','motivation up - https://open.spotify.com/playlist/6Oer1XR6bNH6rMnbPxKzOV?si=27a7390809fa4120'],
        loneliness: ['loneliness - https://open.spotify.com/track/1sxfSip524RUcbnhlqPZ4w?si=548c8f7886ad4000','loneliness trap mix - https://open.spotify.com/track/0BI3YKBiTJAsBjLDhPcWGr?si=e2e83e8220074327','escape loneliness - https://open.spotify.com/playlist/45001p0RBy3mdWNfpevzP9?si=d7f9d8bd9f4d4af9'],
        suicidal: ['suicidal - https://open.spotify.com/track/1iSqfoUFnQwV0QW1EfUit8?si=1a96f65e8eaa43a6 ','ecstacy - https://open.spotify.com/track/00t7QTffOR3SA3L1BvSQVq?si=0b151bf2ec4d4073','suicidal thoughts - https://open.spotify.com/playlist/3tZsL78GS4qYp3Prl2j8ey?si=4c744c85174e4b57']
        // Add more music for other emotions
    };

    var podcastSuggestions = {
        heartbreak: ['Heal your heartbreak - https://open.spotify.com/show/397zouLeALyp8u65z8eD4K?si=f37f49388f7c42ba','heartbreak podcast - https://open.spotify.com/show/6FzcUeLP2iySwx8vk2IoeA?si=aaa25985196747e4','heartbreak  central - https://open.spotify.com/show/2rNyAppD6oPaiuPlH4yT0v?si=09b06d1670f74a98','heartbreaks are not easy - https://open.spotify.com/episode/2kGsMpN2hfpGro5UbMmRYe?si=e39498cb6bac4a05'],
        anxiety: ['breathe academy - https://open.spotify.com/show/4w39IG3VAf7SD7SYKT0kIm?si=2aa62db97c9f4762','cyber anxiety - https://open.spotify.com/show/0vwmovRkUyPY03GZE6R05m?si=eee6b64c1ec8407d','anxiety matrix - https://open.spotify.com/episode/55Fqg1uFSUtUEVOIyLpdET?si=W6rDGZ80TiuuB0_-IAqplQ'],
        depression: ['my depression playlist - https://open.spotify.com/show/7Aty5oPB3u1yn7zYGSM9An?si=a3f44ddca5114b51','depression talks podcast - https://open.spotify.com/show/0KJM293ZIbiO6KZIM0eBPd?si=72dce32e4fde4674','depression and people - https://open.spotify.com/show/0Zc93gQO8zJxfNvRGv6gzY?si=5edc391ff0aa4530','healing for depression - https://open.spotify.com/show/4YSljuu1Xod10nTY307nR3?si=8b50078c1ada4216'],
        discouraged: ['The ass breaking motivation - https://open.spotify.com/show/2tEwvc5QB4JbmkwwuYobvf?si=16e2625132bf4b52','Be ruthless - https://open.spotify.com/episode/0bWTCe5XEbZNkKDEiVoydX?si=mXGFQfu9SmuXEZHGESHDbw','mathew mcConaughey - https://open.spotify.com/episode/1AQWQuFRK4eTHlrfcq1jIC?si=rKuk7Xb8RCGekB8Xn3E6tw'],
        loneliness: ['loneliness podcast - https://open.spotify.com/show/5uJQpcTCmql1LpTZijA5KD?si=0d2414f43e2149ca','cure for loneliness - https://open.spotify.com/show/2Y9Vwo1CvPBRhSI8tdvglX?si=e2ce628261eb45b1','lone e stories - https://open.spotify.com/show/1DOgf4rMPLvTQ1zZuhMwOD?si=8ea81c00e7a24dfa'],
        suicidal: ['interruptions - https://open.spotify.com/show/320x660oYtFogvsP0K0j7u?si=523811ecfa534fde','before you commit suicide - https://open.spotify.com/show/5vjfl3blAkqaPLYziFHNOk?si=602e5c849fc54323','before you kill yourself - https://open.spotify.com/show/0Zm4gaU3qTPg5QtvO8GNUx?si=9e4655e83afa4cd9']
        // Add more music for other emotions
    };

    var movies = {
        heartbreak: ['Watch 500 Days of Summer on Hulu.',
            'Watch Falling Inn Love on Netflix.',
            'Rent or buy La La Land on Amazon Prime Video.',
            'Rent or buy Music and Lyrics on Amazon Prime Video.',
            'Rent or buy Forgetting Sarah Marshall on Amazon Prime Video.',
            'Watch Breaking All the Rules on Amazon Prime Video'],
        anxiety: ['Black swan','The Virgin suicides','500 days of summer','silver linings Playbook','InsideOut','A Beautiful Mind'],
        depression: ['Garden State.',
        'Prozac Nation.',
        'Worlds Greatest Dad.',
        'Sylvia.',
        'Eternal Sunshine of the Spotless Mind.',
        'Little Miss Sunshine.',
        'The Perks of Being a Wallflower.',
        'Girl, Interrupted.'],
        loneliness: ['cast away','Taxi driver The apartment','moon Gravity','Oldboy Replusion'],
        discouraged: ['Mamma Mia!',

            'Forrest Gump',
            
            'Harry Potter',
            
            'The Pursuit of Happyness',
            
            '3 Idiots',
            
            'The Perks of Being a Wallflower',
            
            'The Princess Bride',
            
            'Clueless',
            
            'Days of Summer'],
        suicidal: ['According to Greta (2009) PG-13 | 92 min | Drama, Romance.',
            'Thirteen (2003) R | 100 min | Drama.',
            'The Perks of Being a Wallflower (2012)',
            'Cyber Bully (2011 TV Movie)',
            'The Art of Getting By (2011).',
            'Girl, Interrupted (1999).',
            'Its Kind of a Funny Story (2010).',
            'The Unsaid (2001)']
        // Add more movies for other emotions
    };

    var books = {
        heartbreak: ['Me Before You',

            'The Fault in Our Stars',
            
            'They Both Die at the End',
            
            'A Little Life',
            
            'The Kite Runner',
            
            'All the Bright Places',
            
            'Milk and Honey',
            
            'The Book Thief',
            
            'Tiny Beautiful Things'],
        anxiety: ['The anxiety and Phobia Workbook',

            'Unwinding Anxiety',
            
            'Essential Strategies for social anxiety',
            
            'Mind Over Mood',
            
            'Taking control of anxiety',
            
            'The Body Keeps the Score',
            
            'The Highly Sensitive Person',
            
            'Getting over OCD',
            
            'Hope and Help for Your Nerves'],
        depression: ['Reasons to Stay Alive',

            'Cognitive Behavioural Therapy Made Simple: 10 Strategies for Managing Anxiety, Depression, Anger, Panic and Worry',
            
            'Maybe You Should Talk to Someone',
            
            'The Mindful Way through Depression',
            
            'The Perks of Being a Wallflower',
            
            'An Unquiet Mind',
            
            'Darkness Visible',
            
            'Furiously Happy',
            
            'Prozac Nation'],
        loneliness: ['Eleanor Oliphant is Completely Fine',

            'The Bell Jar',
            
            'The Lonely City by Olivia Laing',
            
            'Jane Eyre',
            
            'The Catcher in the Rye',
            
            'Frankenstein',
            
            'Solitude',
            
            'The Alchemist by Paulo Coelho',
            
            'The Little Prince'],
            discouraged: ['The Great Gatsby',

                'To Kill a Mockingbird',
                
                'Atomic Habits',
                
                
                
                'One Hundred Years of Solitude',
                
                'The Alchemist',
                
                'The Lord of the Rings',
                
                'The Secret History',
                
                'Think and Grow Rich'],
        suicidal: ['Aftershock: Help, Hope, and Healing in the Wake of Suicide.',
            'Andrew, You Died Too Soon: A Family Experience of Grieving and Living Again.',
            'The Bereaved Parent. ...',
            'But I Didnt Say Goodbye',
            'Dying to Be Free: A Healing Guide for Families After a Suicide',
            'The Empty Chair',
            'The Enigma of Suicide.']
        // Add more books for other emotions
    };

    var activities = {
        
            heartbreak: [
                'Yoga for Heartbreak and Grief YouTube link - https://youtu.be/iEVn59U2_LY?si=9oisfAcWfCWT_opT',
                'Cooking Comfort Food YouTube link - https://youtu.be/T4NOt727wqI?si=vsf7AmZyq6PF02i2',
                'Journaling to Heal Heartbreak YouTube link - https://youtu.be/T4NOt727wqI?si=vsf7AmZyq6PF02i2'
            ],
        
        
        anxiety: [
            'A popular playlist for mindfulness and meditation is available at - https://www.youtube.com/playlist?list=PLiUrrIiqidTVNQB5GrD2uh-bmfUGGwh-z',
            'Breathing Exercises - https://www.youtube.com/watch?v=S4zsL-WXuFM.'
        ],
        
        depression: ['When dealing with feelings of depression, engaging in activities that can help improve your mood and overall well-being is crucial. Here are some activities along with YouTube video links that can be beneficial:'],
        depression: ['Mindfulness Meditation - https://www.youtube.com/watch?v=iXUFMndiVxM','Exercise - https://www.youtube.com/watch?v=sWfNosruPPw',''],
        loneliness: ['Here are some activities you can do when youre feeling lonely, along with some YouTube video links that might help:'],
        loneliness: ['Yoga for Loneliness - Yoga With Adriene - https://youtu.be/DFVzpvz0FgQ?si=aun2TCW009ctklYK','Baking Cookies Alone - Tasty: https://youtu.be/47SB02wr4Eo?si=jalEmLRPEyXVLa1i','10 Art Therapy Techniques for Dealing with Anxiety Depression PTSD and More - https://youtu.be/O24njoSZMXQ?si=siimqVJHNoxJ3siX','Learning a New Language Alone FluentU - https://youtu.be/kQXLHcqJbcQ?si=cHr9Q4xEXfyBMapM','Loneliness and Online Gaming  The Game Theorist - https://youtu.be/oNJm9mTPwFQ?si=yE9xJ6EvACXA6nCR'],
        discouraged: ['here are the YouTube video links to watch when you feel discouraged:'],
        discouraged: ['Guided Meditation for Positive Energy and Motivation - https://www.youtube.com/watch?v=2rqgIYsL1dQ','Yoga for Stress Relief and Relaxation - https://www.youtube.com/watch?v=8fOX9mhmpQw','Best Motivational Speech Compilation - https://www.youtube.com/watch?v=2Lz0VOltZKA','Relaxing Virtual Nature Walk - https://www.youtube.com/watch?v=gCfLkA5Jwv4','Art Therapy: Painting Your Emotions - https://www.youtube.com/watch?v=FpHFeV-g2nI','5-Minute Mindfulness Meditation - https://www.youtube.com/watch?v=inpok4MKVLM','Morning Affirmations for Positivity - https://www.youtube.com/watch?v=QzDZb5_mep0'],
        suicidal: ['Positive Affirmations for Self-Love - https://www.youtube.com/watch?v=5w5rLQY7Y3s','How to Practice Self-Love - https://www.youtube.com/watch?v=ZXsQAXx_ao0','Positive Affirmations for Confidence - https://www.youtube.com/watch?v=aAuB9fJ2zEU ']
        // Add more activities for other emotions
    };

    // Display a random quote
    var quoteArea = document.getElementById('quoteArea');
    var quote = quotes[emotion][Math.floor(Math.random() * quotes[emotion].length)];
    //quoteArea.innerHTML = '<p>Hey...Here is some Quotes to relax yourself </p>';
    quoteArea.innerHTML = '<p style="color: teal;">QUOTES SPECIALLY FOR YOU</p><p>' + quote + '</p>';

    // Display a random music suggestion
    var musicArea = document.getElementById('musicArea');
    var randomMusic = musicSuggestions[emotion][Math.floor(Math.random() * musicSuggestions[emotion].length)];
    musicArea.innerHTML = '<p>' + randomMusic + '</p>';
    var [musicText, musicLink] = randomMusic.split(' - ');

    // Create an anchor element and set its href and innerHTML
    var musicLinkElement = document.createElement('a');
    musicLinkElement.href = musicLink;
    musicLinkElement.innerHTML = musicText;

    // Append the anchor element to the musicArea
    musicArea.innerHTML = '<p style="color: teal;">HEY! WHY DO NOT YOU PUMP YOURSELF UP WHEN YOU ARE FEELING DOWN? </p>';
    musicArea.appendChild(musicLinkElement);

    var podcastArea=document.getElementById('podcastArea');
    var randomPodcast = podcastSuggestions[emotion][Math.floor(Math.random() * podcastSuggestions[emotion].length)];
    podcastArea.innerHTML = '<p>' + randomPodcast + '</p>';
    var [podcastText, podcastLink] = randomPodcast.split(' - ');

    var podcastLinkElement = document.createElement('a');
    podcastLinkElement.href = podcastLink;
    podcastLinkElement.innerHTML = podcastText;

    podcastArea.innerHTML = '<p style="color: teal;">HERE ARE SOME PODCASTS TO RELAX YOURSELF </p>';
    podcastArea.appendChild(podcastLinkElement);

    var movieArea = document.getElementById('movieArea');
    var movie = movies[emotion][Math.floor(Math.random() * movies[emotion].length)];
    movieArea.innerHTML = '<p><span style="color: teal;">SOME MOVIES TO COMFORT YOU: </span>' + movie + '</p>';

    var bookArea = document.getElementById('bookArea');
    var book = books[emotion][Math.floor(Math.random() * books[emotion].length)];
   bookArea.innerHTML = '<p><span style="color: teal;">SOME BOOKS TO COMFORT YOU: </span>' + book + '</p>';

    var activityArea=document.getElementById('activityArea');
    var activityPodcast = activities[emotion][Math.floor(Math.random() * activities[emotion].length)];
    activityArea.innerHTML = '<p>' + activityPodcast + '</p>';
    var [activityText, activityLink] = activityPodcast.split(' - ');

    var activityLinkElement = document.createElement('a');
    activityLinkElement.href = activityLink;
    activityLinkElement.innerHTML = activityText;

    activityArea.innerHTML = '<p>These activities can help soothe your mind and heart during difficult times',
    'Here are some activities to do when you feel heartbroken',
    'Anxious,Deppressed,Discouraged and Lonely: </p>';
    activityArea.appendChild(activityLinkElement);
    }