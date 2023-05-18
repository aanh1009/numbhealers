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
    info5 ="";
    if (a==1){
        
    }

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