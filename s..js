function xcalculate (){
    var a = parseInt(document.querySelector("#day").value);
    var b = parseInt(document.querySelector("#month").value);
    var c = parseInt(document.querySelector("#year").value);
    var total = a+b+c;
    while(total >= 10){
        let z = total%10;
        total = parseInt(total/10) + z;
    }
    document.querySelector("#total").innerHTML = "Life path number = " + String(total);
    var info1 = "";
    var info2 = "";
    if(total==1){
        info1= "These people like to be leaders. They have courage and inspiration, and they are active and creative. They give priority to individual success and have the ability to use their initiative and determination to succeed. They should devote more time to other people. It is good to praise them. They are domineering. They have good management skills and may achieve glory or high social status."
        info2= "Weaknesses, what should be learned : Beware of superiority and stubbornness. These people are hesitant and may have difficulty in finding their own way. They get too little help and support from others. They are often lonely"
    }
    if(total==2){
        info1="These people are tolerant and kind. They have very good intuition that can be used during various activities. It is good to listen to others, be patient and learn the art of diplomacy. These people lack the courage to implement their plans and often leave initiative to other people. They require devotion from their partners. Relationships, friendships and emotional life are very important to them. They have the ability to reconcile people who are in dispute and they can successfully cooperate with others."
        info2="Weaknesses, what should be learned: People with this Life Path Number cling to their property and are often bothered by small problems. They may be passive and have the tendency to give in to circumstances. Beware of subordination and hypersensitivity. These people poorly cope with stress and become distracted and nervous if there is not peace and quiet around them. People with this Life Path Number often avoid any form of leadership and responsibility."
    }
    if(total==3){
        info1="These people are mentally alert and have creative minds. They are creative and original, and they have a good imagination. They hate boredom and like to cooperate with others. They are charming and witty. They are critical of others and they should therefore learn how to be more diplomatic. They need to work freely and without restraints. They like working in pairs. They often work better under stress, which activates their mental energy. They usually succeed quickly. They need to be more ambitious and to open up more. They are inventive and imaginative in solving problems. They make new contacts easily, but they are sometimes superficial. They make decisions fast but they are not always the correct ones."
        info2="Weaknesses, what should be learned: Beware of restlessness, distractibility, bad temper, irritability, fear of dullness and uneven financial life. Beware of carelessness."
    }
    if(total==4){
        info1="These people are successful at what they do thanks to their perseverance and systematic work. Consistency and order are very important to them. They will achieve success later in life by working hard. Patience is important. These people are practical and conservative. They do not like changes but they do not like monotonous life either. They are usually physically strong, so they prefer activities where they can use their physical strength and dexterity. They are hardworking. They need to be sure of their partner´s loyalty."
        info2="Weaknesses, what should be learned: Beware of carelessness and a narrow view of life. These people should be careful when they are making decisions. What they experience should not be turned inward because it will affect the nervous system; it is therefore important to release cumulated energy. These people might lack confidence."
    }
    if(total==5){
        info1="These people need movement and change, and they like to travel. They search for freedom and adventure. They are open to new things and ideas. They have an inclination for leadership. They are ambitious but they are also very sensitive and avoid routine and boredom. They are impressed by people who are able to convince them in some area."
        info2="Weaknesses, what should be learned: These people should be careful not to succumb to sudden ideas, instability, inclination to nervousness and restlessness. They should keep a balance in the emotional, professional and financial areas. They do not like rules and restrictions and cannot be forced to do something. Beware of accidents."
    }
    if(total==7){
        info1="These people prefer mental work. They want to realise their potential and work hard in order to improve themselves. They need friendship in their life. Their marriage can be complicated because they want to be independent. There are unexpected changes in their lives. Do not force anything. In order to succeed it is necessary to communicate with others, experience life, and develop self-confidence. Friendships and relationships play a major role. Implementation of material goals is difficult, even if money come in unexpected ways. They are often diligent students; they may have rich spiritual life or go on a long journey. They feel good in the countryside, in the mountains or by the sea. These people may have different healing talents e.g. physical, emotional or spiritual."
        info2="Weaknesses, what should be learned: Watch out for excessive pessimism and curtness. Sometimes this person is too proud and inaccessible. Beware of loneliness and lack of realism. Impartiality is important."
    }
    if(total==8){
        info1="These people are ambitious and have a desire for power and money. Risky journeys will bring them success. The problem is sometimes a lack of courage, endurance and mental balance. They have good management and organizational skills. They are tough and persistent, but also conservative. It is important for them to understand how to maintain balance in life. They need to understand causes and consequences. It is important to keep in balance giving and receiving; material property will not bring peace or satisfaction if it does not benefit others. They have a strong character and determination to overcome obstacles."
        info2="Weaknesses, what should be learned: These people have to be careful not to abuse their power because it can have serious negative consequences. It is good if they learn to wait for their success, otherwise there is a risk of many failures; aggression; toughness; intolerance and impatience. They should not lose a sense of decency and respect for others otherwise there can be financial or legal problems. They think highly of themselves and they are picky and moody. Accidents or health problems may slow down their development."
    }
    if(total==9){
        info1="These people are idealistic. They have an idealistic approach towards themselves and towards their surroundings. They will go on a journey that will help them gain experience and meet important people. They have a high level of mental energy and they are be able to handle all the difficulties and challenges. It is good if they become more devoted to their goals and become more sensitive and courageous. They are responsible. Sometimes they do not realise the depth of their wisdom. They have no need for high material security. Love, the truth and friendships are very important. They have a strong need to give much of themselves to others. At mature age they will sometimes experience unexpected success and the realisation of big plans. Broad communication with the public or with people abroad; they learn easily."
        info2="Weaknesses, what should be learned: Beware of the tendency to have delusions, be extremely emotional, and have moody and exaggerated reactions. Beware of tendency to emotional stress and mental excesses."
    }
    if(total==6){
        info1="These people will have to make choices very often and it is necessary to make the right decisions in the face of emerging opportunities. Romantic relationship, family and home are the foundations for success. They like helping others. They need a partner who meets their expectations. They long for the harmonisation of their relationships. They are usually successful in their love life and marriage. However, it is necessary to find willingness to make compromises. They often have a talent for business and a sense for aesthetics and art. They should regularly take good care of their health. They emphasise the material side of life. It is very important to clarify what is good and what is bad, and understand that the purpose of challenges is to strengthen and check person´s determination. Recognition and love, that improve self-confidence are very important."
        info2="Weaknesses, what should be learned: Beware of hesitation, restlessness and intolerance. Beware of excessive desire for perfection and irritability."
    }
    document.querySelector("#info1").innerHTML = info1;
    document.querySelector("#info2").innerHTML = info2;
    var d =document.querySelector("#name").value;
    var na1 = 0;
    var na2 = 0;
    for(x of d) 
    {
        if(x=="J"||x=="S"){
            na1 +=1;
        }
        if(x=="B"||x=="K"||x=="T"){
            na1 +=2;
        }
        if(x=="C"||x=="L"){
            na1 +=3;
        }
        if(x=="D"||x=="M"||x=="V"){
            na1 +=4;
        }
        if(x=="N"||x=="W"){
            na1 +=5;
        }
        if(x=="F"||x=="X"){
            na1 +=6;
        }
        if(x=="G"||x=="P"){
            na1 +=7;
        }
        if(x=="H"||x=="Q"||x=="Z"){
            na1 +=8;
        }
        if(x=="R"){
            na1 +=9;
        }
    }
    var arr=[];
    for (x of d) {
        arr += x;
    }
    for (let i=0; i<arr.length;i++){
        if(arr[i]=="Y")
        {
            if(arr[i-1]!="A"&&arr[i-1]!="E"&&arr[i-1]!="I"&&arr[i-1]!="O"&&arr[i-1]!="U"&&arr[i+1]!="A"&&arr[i+1]!="E"&&arr[i+1]!="I"&&arr[i+1]!="O"&&arr[i+1]!="U")
            {
                na2 += 7;
            }
            else {
                na1 += 7;
            }
        }
    }
    while(na1>=10){
        let na11=na1%10;
        na1 = parseInt(na1/10) + na11;
    }
    var info3 = "";
    
    for(x of d) 
    {
        if(x=="A"){
            na2 +=1;
        }
        if(x=="U"){
            na2 +=3;
        }
        if(x=="E"){
            na2 +=5;
        }
        if(x=="O"){
            na2 +=6;
        }
        if(x=="I"){
            na2 +=9;
        }
    }
    while(na2>=10){
        let na21=na2%10;
        na2 = parseInt(na2/10) + na21;
    }
    if (na2 == 5){
        info3 ="Change, discovery, and taking chances are all important themes of soul number 5. You are a dynamic person if you have this number. You are passionate and full of energy. However, you could occasionally find it difficult to focus your devotion on a particular activity."
    }
    if (na2 == 1){
        info3 ="According to the soul number 1 type, you are a natural leader due to your independence, inventiveness, and eye-catching attitude. You're a powerful presence who can command respect and attention wherever you go. It just comes easy to you because of your powerful, magnetic personality. "
       }
    if (na2 == 7){
        info3 ="Your mind has many gifts which you appreciate and use to unlock life's secrets. You do extensive research. You look beyond what is on the surface and detest hasty conclusions or viewpoints. Although you have a theoretical mind, you prefer to build your hypotheses on scientific facts rather than engage in fantasies or idle pondering."
    }   
    if (na2 == 2){
        info3 ="You desire a lifelong commitment to someone or something. Love comes to you quickly. You have a high level of sensitivity and emotion and require society and friends and enjoy the finer things in life. You want safety and comfort so have sophisticated taste and possess an appreciation for exotic items."
    }
    if (na2 == 3){
        info3 ="You have a soul that is fresh and playful. You are a natural optimist who wants to uplift and energise everyone. You need assistance in realising that you cannot alter the course of events on your own because your instincts are highly vulnerable and easily injured. However, you can undoubtedly have an impact on people and make their day better."
    }
    if (na2 == 4){
        info3 ="You pay close attention to detail and are very thorough. You enjoy analysing a problem thoroughly before applying a logical and realistic solution. You want to set a good example for others by being dependable, strong, and disciplined. You detest abrupt changes and favour everything to be in order."
    }
    if (na2 == 6){
        info3 ="You naturally take care of others because you possess maternal instincts such as being kind, dependable, and protective. Except for love, you are incredibly responsive in every way. Although you love to love, your love is too blind."
    }
    if (na2 == 8){
        info3 ="Your drive and counselling skills can help you advance professionally and become an excellent mentor. When constructing and producing the best version of yourself, your heart is set on it. You hold yourself in high regard, demand the best, and demand that things go your way."
    }
    if (na2 == 9){
        info3 ="Knowing that you have improved humanity's situation gives you the most fulfilment. You hold the highest standards of ideals. You're all for details and work to create an imaginary world, to improve everyone's situation in life, and to achieve personal perfection. You've been studying human nature all of your life."
    }
    document.querySelector("#na1").innerHTML = "Personality number = " + na1 ;
    document.querySelector("#info3").innerHTML = info3;
    
    
    var na4="";
    if (na1 == 5){
        info4 ="You are a stimulating person. You brighten social gatherings with your fresh and original ideas. Your conversation tends to be sprinkled with novelty and wit. You have a quick tongue and charisma."
    }
    if (na1 == 1){
        info4 ="You radiate with a dynamic and efficient energy. You appear controlled and capable. You value courage and effort in the face of difficulties and these qualities show. Others can sense that you will not be pushed around."
       }
    if (na1 == 7){
        info4 ="You seem mysterious and different. People see you as serious and studious. You are highly independent and self- sufficient. Your accept ional intelligence and wisdom are quickly noticed, people respect you."
    }   
    if (na1 == 2){
        info4 ="You appear friendly and unpretentious. You have a soft and warm exterior. Others perceive you as gentle, safe harbor. People are drawn to you because, among other reasons, you appear warm and unthreatening."
    }
    if (na1 == 3){
        info4 ="Your vibration is full of life. You are uplifting, inspiring, and charming. You are a fun person to be around. Your wit and sparkling personality make you the life of a party."
    }
    if (na1 == 4){
        info4 ="You are a family person. You love the intimacy, consistency, and the security a family provides. You are a good provider and protector. But family members may take your efforts for granted."
    }
    if (na1 == 6){
        info4 ="You radiate understanding and compassion. People sense your warmth and fairness. For this reason, you attract many people who are in need of comfort, including the disadvantaged."
    }
    if (na1 == 8){
        info4 ="You appear strong and powerful. You have an impressive personality and can influence and even intimidate through sheer force. You have natural authority. Your competence and enthusiasm attract people with resources."
    }
    if (na1 == 9){
        info4 ="You have an impressive and aristocratic bearing. No matter how tall you are, you appear noble and upright. You are very much in control of the image you send out to others."
    }
    document.querySelector("#na2").innerHTML = "Soul urge number = " + na2 ;
    document.querySelector("#info4").innerHTML = info4;

    while(a>= 10){
        let a1 = a%10;
        a= parseInt(a/10) + a1;
    }
    var info5 ="";
    var info6 ="";
    var info7="";
    var info8 ="";
    if (a==1){
        info5 ="Individuals with a Birth Number of one have a strong desire to be in the spotlight and take on leadership roles. They exhibit a masculine energy and can come across as confident, even bordering on arrogance. They enjoy being the center of attention and thrive in situations where they can be the protagonist, whether it's on screen or in the workplace. Ambition drives those with a Birth Number of one, and they strive to reach the top. They possess a healthy ego, sometimes leaning toward egocentricity. To achieve their goals, they may resort to childlike behaviors, including throwing tantrums to attract attention. They are generous with their loved ones and don't mind picking up the tab while dining out, as it allows them to make a grand impression.";
        info6="When it comes to protecting their loved ones, individuals with a Birth Number of one are fierce and will confront any threat or opposition. In the realm of sexuality, they can be serious but also possess a remarkable ability for creativity and exploration once they let their guard down. Those with a Birth Number of one have a connection with individuals born under the astrological sign of Leo, sharing similar traits and characteristics. Additionally, Sunday holds special significance for them as it is considered their best day of the week."
    }
    if (a==2){
        info5 ="Individuals with a Birth Number of two have distinct characteristics that set them apart. They are not as assertive as Number Ones, but they possess a quiet determination that allows them to achieve their goals. Their tactile nature makes them enjoy both giving and receiving affectionate caresses. Male Number Twos have a deep appreciation for the female body, while female Number Twos desire a masculine partner who can sweep them off their feet.";
        info6="Initially, Number Twos may come across as shy, but once you get to know them, you'll find them worth the effort. While they appreciate tenderness, they also don't mind a touch of domination. However, they can be prone to moodiness, and it's important to be mindful of their emotional state. They should avoid excessive alcohol consumption during melancholic or depressed times.";
        info7="When it comes to the bedroom, a dimly lit atmosphere enhances their experience of imaginative passion";
    }
    if (a==3){
        info5 ="Individuals with a Birth Number of three are often regarded as charismatic smooth-talkers. They have a tendency to embellish stories, engage in exaggeration, and add a touch of embroidery to their narratives. These individuals have a strong affinity for travel, foreign places, and different cultures. Their fascination with exotic locations never wanes, and they enjoy sharing their experiences with others.";
        info6 ="Threes thrive in the limelight and relish being the life of the party. They possess a natural talent for captivating an audience and love performing for anyone and everyone, especially when they've had a few drinks. Considered highly sexual and flirtatious, they are often seen as competitive, which can lead to envy and the development of enemies who are envious of their perceived successes. Defeat or humiliation is not easily tolerated by individuals with a Birth Number of three.";
        info7="These individuals take pride in their appearance and possess a good wardrobe, always dressing to impress. They are witty and intelligent conversationalists, skilled in storytelling and weaving engaging tales. In matters of the bedroom, it's important to consider their tendency for exaggeration, especially if alcohol is involved. However, one noteworthy physical attribute of people with this number is their cute little bums."
    }
    if (a==4){
        info5 ="Individuals with a Birth Number of four possess exceptional listening skills and a deep understanding of the fears and phobias that people confide in them. This innate ability makes them well-suited for roles as psychologists, counselors, and compassionate companions. As they mature, they develop self-confidence, gain wisdom, and cultivate a visionary perspective. Fours often possess remarkable insight and intuition that sets them apart. They have a knack for being ahead of their time and can be seen as revolutionaries in their own right.";
        info6 ="Fours excel as teachers, sharing their wealth of experience and practical knowledge with others. People find comfort and ease in their presence, drawn to their magnetic charm and unique approach to life. They naturally attract individuals facing challenges and dilemmas, much like flowers attract bees. Fours are often relied upon to provide solutions and resolutions in these situations. Sunday holds special significance for them, serving as their most favorable day of the week. Additionally, Aquarians frequently enter their lives, leaving an impact or influence from time to time.";
    }
    if (a==5){
        info5 ="Individuals with a Birth Number of five have an insatiable desire for variety in both their work and play. They dislike being tied down to any particular job or person, always seeking new and exciting ventures. This inclination can lead them to come up with innovative ideas for generating income, sometimes even venturing into questionable or fraudulent territories. Fives have a penchant for impressing others and possess wit and charm, making them accomplished conversationalists. However, they can also exhibit a con artist-like nature on occasion.";
        info6 ="Those with a Birth Number of five strongly embrace the saying 'cleanliness is next to godliness.' They have a penchant for orderliness and organization, ensuring that everything has its place, including you! Restlessness is a defining characteristic of fives. They love to travel extensively, exploring different places and meeting a multitude of people along the way. While they may form numerous lucrative connections, long-term relationships tend to be less prevalent in their lives.";
        info7 = "Individuals with a Birth Number of five feel a connection with individuals born under the zodiac signs of Gemini or Virgo, finding common ground with their traits and characteristics. Wednesday holds special significance for them as their most favorable day of the week."
    }
    if (a==6){
        info5 ="Individuals with a Birth Number of six possess a charm and charisma that allows them to thrive in any environment, much like a blooming rose. They have an inherent need for attention and thrive when they receive it abundantly. Some may perceive them as charming, while others may label them as flirtatious. These individuals possess excellent communication skills and have a knack for talking their way into and out of any situation.";
        info6 ="Security, balance, and harmony are significant aspects associated with the Birth Number six. It is crucial for individuals with this number to seek out and cultivate these elements in their lives. They place great importance on having a secure job, stable relationships, and a harmonious home life for their overall well-being.";
        info7 ="Sixes are known for being sensual, sentimental, and romantic. However, they often struggle with issues of self-worth, self-esteem, and self-confidence. When they are financially secure, they can be exceptional lovers, expressing considerate and kind traits. On the other hand, when burdened by debt or financial struggles, their behavior can be challenging and difficult to handle. Friday is considered their best day of the week, holding positive energies for them. They are associated with the morning and evening star of Venus and find common ground with the zodiac signs of Taurus and Libra."
    }
    if (a==7){
        info5 ="If your Birth Number is seven, you have a strong inclination towards debating and discussing the moral aspects of the world. You possess a genuine desire to assist and support those who are less fortunate than you. Spiritually, you have a philosophical nature and are drawn to music and art, which can lead you to explore the profound depths of your psyche or the elevated heights of spirituality. Your compassionate, sensitive, and perceptive nature makes you deeply affected by thoughtless actions or careless words from others.";
        info6 ="Individuals with a Birth Number of seven exude refinement, gentleness, and an air of vagueness. They are dreamers, often indulging in vivid imaginings and possessing an allure of glamour, charisma, and magnetism. However, it's important to note that a tendency towards alcoholism or drug addiction is not uncommon among those born with this number. When in a balanced state, a seven is an excellent analyst and a seeker of truth. However, when off-balance, they can become skeptical, critical, and may struggle with an inferiority complex.";
        info7 ="People influenced by the number seven are likely to encounter individuals born under the sign of Pisces, who may enter or have a significant impact on their lives. Monday is considered the best day of the week for sevens, as it provides an ideal time for meditation, contemplation, and self-reflection."
    }
    if (a==8){
        info5 ="The Birth Number eight can be deceiving at first glance. While individuals with this number may appear conservative, prim, and proper, they have another side to their personality. In their youth, they often exhibit a maturity beyond their years, but as they grow more confident, they seem to defy aging and appear younger than their actual age.";
        info6 ="When it comes to sexuality, those with a Birth Number of eight embody a combination of lust and trust. Once they have gained confidence, there are no limits to what they can achieve in fulfilling their desires. They are highly focused on their careers, driven to succeed, and thrive on problem-solving and tackling challenges. These individuals have the capacity to either become stuck in repetitive patterns due to a fear of change or continuously strive for new horizons to conquer. They possess adaptability, systematic thinking, political acumen, and logical reasoning. However, relying too much on their intellect and neglecting their emotions can be their downfall.";
        info7 ="Throughout the life of an eight, their parent of the same sex often becomes a source of problems, challenges, or unresolved issues. Capricorns play a significant role in the lives of eights, either becoming their best friends or their worst nightmares. Saturday holds special significance for individuals with this Birth Number, serving as their most favorable day of the week."
    }
    if (a==9){
        info5 ="If you have a Birth Number of nine, you possess a strong inclination for engaging in debates, discussions, and disputes on almost any topic. Admitting to being wrong or misinformed is not something that comes easily to you. This can make you appear somewhat unapproachable, but your company is undeniably stimulating. You have a natural inclination towards fighting for what you believe in, bringing about reform, and engaging in combat, even if you sometimes become your own worst enemy in the process.";
        info6 ="The life you lead tends to be perceived as larger than life by others, often leaving them wondering how you manage it all. As a survivor in the game of life, you have accumulated valuable knowledge, experience, and wisdom. It is now your mission to share and teach what you have learned. Developing your communication skills is crucial for you to become an inspiring and inspirational figure.";
        info7 ="Individuals with a Birth Number of nine have connections to the zodiac signs of Aries and Scorpio, as well as the first and eighth houses of astrology. Exploring and studying the ancient art and science of astrology can be highly beneficial for you. Tuesday is considered your best day, and Mars holds significance as your ruling planet."
    }
    document.querySelector("#info5").innerHTML = info5;
    document.querySelector("#info6").innerHTML = info6;
    document.querySelector("#info7").innerHTML = info7;
    document.querySelector("#bd").innerHTML = "Birth Date Number = " +  a;
    var nall = na1 + na2;
    var info9 ="";
    if (a==1){
        info9 ="You are a natural-born leader with a strong sense of individuality and ambition. You have the drive and determination to succeed in any endeavor you choose. Your self-confidence and assertiveness inspire others to follow your lead. With your strong willpower and focus, you can overcome obstacles and achieve great things.";
    }
    if (a==2){
        info9 ="You have a talent for diplomacy and cooperation. You excel in partnerships and team environments where your sensitivity and intuition come into play. You are a natural peacemaker, able to find common ground and create harmony. Your nurturing and supportive nature make you a valuable ally and friend.";
    }
    if (a==3){
        info9 ="You possess a vibrant and creative personality. You have a natural talent for self-expression through art, music, writing, or other creative outlets. Your infectious enthusiasm and sense of humor make you a captivating entertainer. You thrive in social settings and enjoy sharing your ideas and talents with others.";
    }
    if (a==4){
        info9 ="You are a reliable and hardworking individual with a strong sense of responsibility. You excel in structured environments where your organizational skills and attention to detail shine. You are practical, disciplined, and dedicated to your work. Your dependable nature makes you a trusted and valued team member.";
    }
    if (a==5){
        info9 ="You are a free spirit with a thirst for adventure and change. You crave excitement and variety in your life and are drawn to travel and new experiences. Your adaptability and resourcefulness allow you to navigate through life's challenges with ease. You embrace change and thrive in dynamic environments.";
    }
    if (a==6){
        info9 ="You are a nurturing and compassionate individual who excels in caretaking roles. You have a strong sense of responsibility towards your loved ones and create harmonious and supportive environments. Your caring nature extends beyond your family, as you have a deep desire to help and serve others in your community.";
    }
    if (a==7){
        info9 ="You possess a deep inner wisdom and a strong connection to spirituality. You are introspective and enjoy delving into philosophical and metaphysical topics. Your analytical mind and research skills make you an excellent investigator and problem solver. You seek knowledge and understanding in your quest for truth.";
    }
    if (a==8){
        info9 ="You are driven by ambition and a desire for financial success. You possess strong leadership abilities and excel in positions of power and influence. Your organizational skills and business acumen allow you to make sound decisions and achieve your goals. You have the potential to amass wealth and create a significant impact.";
    }
    if (a==9){
        info9 =" You are a compassionate humanitarian driven by a desire to make a positive difference in the world. You are passionate about social justice and advocacy work. Your deep empathy and understanding of others allow you to connect on a profound level. You seek to bring about positive change and leave a lasting legacy.";
    }
    document.querySelector("#info9").innerHTML = info9;
    document.querySelector("#dn").innerHTML = "Destiny Number = " +  nall;
}

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();