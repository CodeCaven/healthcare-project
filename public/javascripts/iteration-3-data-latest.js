

/* Health Care System Tree (EPIC 6) */


var healthGraph = {};

healthGraph["nodes"] = 
[ 
    { id: "node1", title: "National Health Act",   description: "This was passed in 1953 to regulate the provision of pharmaceutical, sickness and hospital benefits and of medical and dental services", Image: "key_image_1.png"}, 
    { id: "node2", title: "Medicare", description: "Medicare provides Australian residents with free treatment as a public patient in a public hospital and free or subsidised treatment for some optometrist services, some dental care services, some psychology services, and treatment by doctors", Image: "key_image_2.jpg"},
    { id: "node3", title: "Private Health Insurance", description: "Australians can take out private health insurance — in fact, Australians are encouraged by the Government to take out private health insurance by way of the Medicare levy surcharge. This is applied to people earning over a certain amount who do not have appropriate hospital cover", Image: "key_image_3.jpg"},
    { id: "node4", title: "General practice",   description: "For most general practice consultations, meaning interactions with your doctor in which he or she asks you questions, examines you and discusses a plan of treatment, Medicare now rebates 100 per cent of the Schedule fee", Image: "key_image_4.jpg"}, 
    { id: "node5", title: "Specialists",   description: "Most specialist consultations attract only an 85 per cent rebate. For a consultant physician, the Medicare rebate for an initial attendance is only 85 per cent of the Schedule fee of $150.90, amounting to $128.30", Image: "key_image_5.jpg"}, 
    { id: "node6", title: "Bulk-billing",   description: "Bulk-billing is when the doctor accepts the Medicare benefit (that’s 85 or 100 per cent of the Schedule fee) as full payment for the services rendered. You don’t have to pay the gap"}, 
    { id: "node7", title: "Item numbers",   description: "Most specialist consultations attract only an 85 per cent rebate. For a consultant physician, the Medicare rebate for an initial attendance is only 85 per cent of the Schedule fee of $150.90, amounting to $128.30"}, 
    { id: "node8", title: "Low Income Health Care card",   description: "This entitles you to discounted prescription medicines under the Phamaceutical Benefits Scheme and you may also be eligible for concessions offered by private companies and on Commonwealth, State and Local Government health services"}, 
    { id: "node9", title: "Medicare safety nets",   description: "The Medicare safety net covers a range of doctor visits and tests that you receive out of hospital. Families and couples need to register, but individuals are automatically registered"}, 
    { id: "node10", title: "Tax rebate for medical expenses",   description: "Net medical expenses are the medical expenses you have paid minus any refunds that you received (or could have received) from Medicare or a private health fund"}, 
    { id: "node11", title: "Healthcare cards for veterans",   description: "War veterans, war widows, widowers and their dependants are entitled to a wide range of healthcare benefits which are funded by the Department of Veterans Affairs"}, 
    { id: "node12", title: "Medicines and prescriptions",   description: "The Pharmaceutical Benefits Scheme (PBS) provides Australian residents with access to prescription medicines. Most prescription medicines are subsidised under the PBS"}, 
    { id: "node13", title: "PBS safety net",   description: "The PBS safety net helps keep medicines affordable by limiting out-of-pocket expenses for people who need large numbers of prescriptions"}, 
    { id: "node14", title: "Private health insurance rebate",   description: "The way it works is that if you take out an appropriate private health insurance policy with a registered health fund, you may be entitled to a rebate of a certain proportion of your premiums paid during the year", Image: "key_image_6.jpg"}, 
    { id: "node15", title: "Types of private health insurance",   description: "Private health insurance policies are usually categorised as hospital cover, ancillary or extras cover or combined cover", Image: "key_image_7.jpg"}, 
    { id: "node16", title: "Medicare levy surcharge",   description: "If you earn over a certain threshold and you elect not to have hospital cover (having extras or ancillary cover does not excuse you) you are required to pay an additional surcharge of between 1 and 1.5 per cent of your taxable income on top of the 1.5 per cent Medicare levy"}, 
    { id: "node17", title: "Lifetime Health Cover",   description: "Lifetime Health Cover is a government initiative that rewards people who take out hospital cover earlier in life and maintain it"}, 
    { id: "node18", title: "Hospital cover",   description: "Hospital cover is taken out to help pay the cost of treatment by your doctor or specialist, and to help pay your accommodation costs while you are in hospital"}, 
    { id: "node19", title: "Extras, ancillary or general treatment cover",   description: "Extras cover, also known as ancillary cover or general treatment cover, is to help you pay for out-of-hospital services"}, 
    { id: "node20", title: "Ambulance cover",   description: "Private health funds often have ambulance cover as part of their policies — either as part of extras cover or included in hospital cover"}, 
    { id: "node21", title: "Gap cover",   description: "So-called ‘gap cover’ or ‘no-gap’ schemes aim to prevent you from having to pay the difference between the amount you are reimbursed from Medicare and your health fund and what your doctor or specialist charges when you go into hospital under your private health insurance"}, 
    { id: "node22", title: "Waiting periods",   description: "To avoid people joining funds and then making large claims,Individual health insurers set waiting times"}, 
];

healthGraph["links"] = 
[ 
    { source: "node1",   target: "node2"}, 
    { source: "node1",   target: "node3"},
    //{ source: "node2",   target: "node3"}, 
    { source: "node2",   target: "node4"}, 
    { source: "node2",   target: "node5"}, 
    { source: "node2",   target: "node6"}, 
    { source: "node2",   target: "node7"}, 
    { source: "node2",   target: "node8"}, 
    { source: "node2",   target: "node9"}, 
    { source: "node2",   target: "node10"}, 
    { source: "node2",   target: "node11"}, 
    { source: "node2",   target: "node12"}, 
    { source: "node2",   target: "node13"}, 
    { source: "node3",   target: "node14"}, 
    { source: "node3",   target: "node15"}, 
    { source: "node14",   target: "node16"}, 
    { source: "node14",   target: "node17"}, 
    { source: "node15",   target: "node18"}, 
    { source: "node15",   target: "node19"}, 
    { source: "node15",   target: "node20"}, 
    { source: "node15",   target: "node21"}, 
    { source: "node15",   target: "node22"}, 
];

var healthTree = {
    name: "National Health Act",   
    description: "This was passed in 1953 to regulate the provision of pharmaceutical, sickness and hospital benefits and of medical and dental services", 
    image: "aus-gov.jpg",
    children:[
        {name: "Medicare", 
        description: "Medicare provides Australian residents with free treatment as a public patient in a public hospital and free or subsidised treatment for some optometrist services, some dental care services, some psychology services, and treatment by doctors", 
        image: "medicare-card.jpg",
        children: [
            {name: "Services",
            description: "Medicare subsidises a large number of health services and products. You can use your Medicare card to access medical services, hospital services for public patients, surgical services, prescription medicines, eye tests, pathology tests, imaging and scans.",
            image: "fees-and-services.jpg",
            children: [
                {name: "General practice",   
                description: "For most general practice consultations, meaning interactions with your doctor in which he or she asks you questions, examines you and discusses a plan of treatment, Medicare now rebates 100 per cent of the Schedule fee", 
                image: ""},
                {name: "Specialists",   
                description: "Most specialist consultations attract only an 85 per cent rebate. For a consultant physician, the Medicare rebate for an initial attendance is only 85 per cent of the Schedule fee of $150.90, amounting to $128.30", 
                image: ""},
                {name: "Bulk-billing",   
                description: "Bulk-billing is when the doctor accepts the Medicare benefit (that’s 85 or 100 per cent of the Schedule fee) as full payment for the services rendered. You don’t have to pay the gap",
                image: ""},
                {name: "Item numbers",   
                description: "Most specialist consultations attract only an 85 per cent rebate. For a consultant physician, the Medicare rebate for an initial attendance is only 85 per cent of the Schedule fee of $150.90, amounting to $128.30",
                image: ""},
                {name: "Medicines and prescriptions",   
                description: "The Pharmaceutical Benefits Scheme (PBS) provides Australian residents with access to prescription medicines. Most prescription medicines are subsidised under the PBS",
                image: ""}
                ]},
            {name: "Safety Nets",
            description: "If you need to spend a lot of money on out-of-hospital medical appointments or tests, you may be eligible for the Medicare Safety Net. This means once you have spent up to a certain amount then you will get more money back from the government for your out-of-pocket expenses.",
            image: "safety-net.jpg",
            children: [
                {name: "Low Income Health Care card",   
                description: "This entitles you to discounted prescription medicines under the Phamaceutical Benefits Scheme and you may also be eligible for concessions offered by private companies and on Commonwealth, State and Local Government health services",
                image: ""},
                {name: "Medicare safety nets",   
                description: "The Medicare safety net covers a range of doctor visits and tests that you receive out of hospital. Families and couples need to register, but individuals are automatically registered",
                image: ""},
                {name: "Healthcare cards for veterans",   
                description: "War veterans, war widows, widowers and their dependants are entitled to a wide range of healthcare benefits which are funded by the Department of Veterans Affairs",
                image: ""},
                {name: "PBS safety net",   
                description: "The PBS safety net helps keep medicines affordable by limiting out-of-pocket expenses for people who need large numbers of prescriptions",
                image: ""}
                ]
            }
        ]},
        {name: "Private Health Insurance", 
        description: "Australians can take out private health insurance — in fact, Australians are encouraged by the Government to take out private health insurance by way of the Medicare levy surcharge. This is applied to people earning over a certain amount who do not have appropriate hospital cover", 
        image: "key_image_3.jpg",
        children: [
            {name: "Rebates",   
            description: "The way it works is that if you take out an appropriate private health insurance policy with a registered health fund, you may be entitled to a rebate of a certain proportion of your premiums paid during the year", 
            image: "key_image_6.jpg",
            children: [
                {name: "Medicare levy surcharge",   
                description: "If you earn over a certain threshold and you elect not to have hospital cover (having extras or ancillary cover does not excuse you) you are required to pay an additional surcharge of between 1 and 1.5 per cent of your taxable income on top of the 1.5 per cent Medicare levy",
                image: ""},
                {name: "Lifetime Health Cover",   
                description: "Lifetime Health Cover is a government initiative that rewards people who take out hospital cover earlier in life and maintain it",
                image: ""},
                {name: "Tax rebate for medical expenses",   
                description: "Net medical expenses are the medical expenses you have paid minus any refunds that you received (or could have received) from Medicare or a private health fund",
                image: ""}
            ]},
            {name: "Types of",   
            description: "Private health insurance policies are usually categorised as hospital cover, ancillary or extras cover or combined cover", 
            image: "key_image_7.jpg",
            children: [
                {name: "Hospital cover",   
                description: "Hospital cover is taken out to help pay the cost of treatment by your doctor or specialist, and to help pay your accommodation costs while you are in hospital",
                image: ""},
                {name: "Extras or general treatment cover",   
                description: "Extras cover, also known as ancillary cover or general treatment cover, is to help you pay for out-of-hospital services",
                image: ""},
                {name: "Ambulance cover",   
                description: "Private health funds often have ambulance cover as part of their policies — either as part of extras cover or included in hospital cover",
                image: ""},
                {name: "Gap cover",   
                description: "So-called ‘gap cover’ or ‘no-gap’ schemes aim to prevent you from having to pay the difference between the amount you are reimbursed from Medicare and your health fund and what your doctor or specialist charges when you go into hospital under your private health insurance",
                image: ""},
                {name: "Waiting periods",   
                description: "To avoid people joining funds and then making large claims, individual health insurers set waiting times",
                image: ""}
            ]}
        ]},
        {name: "Government Agencies",
        description: "The Australian Government agencies are the various departments and organizations responsible for implementing government policies and delivering services to the Australian public. These agencies cover a wide range of areas, including health, education, immigration, defense, and finance, among others.",
        image: "government-agencies.jpg",
        children: [
            {name: "Types of",
            description: "There are several types of government agencies in Australia, which are responsible for implementing government policies and delivering services to the public. These agencies can be broadly classified into three categories, federal Government agencies, state and Territory Government agencies and local Government agencies.",
            image: "type-gov-agencies.jpg",
            children : [
                {name: "Services Australia", 
                description: "Services Australia (previously The Department of Human Services) is an Australian federal government body, responsible for the development of service delivery policy and provides access to social, health and other payments and services.",
                image: ""},
                {name: "Department of Health and Aged Care",
                description: "Australian Government Department of Health and Aged Care develops and delivers policies and programs and advise the Australian Government on health, aged care and sport. We work with a wide range of stakeholders to ensure better health for all Australians.",
                image: ""},
                {name: "Australian Institute of Health and Welfare (AIHW)",
                description: "The AIHW was established as a statutory authority in 1987 by the Australian Institute of Health Act 1987 to report to the nation on the state of its health. In 1992, the role and functions of the then Australian Institute of Health were expanded to include welfare related information and statistics, making it the Australian Institute of Health and Welfare.",
                image: ""},
                {name: "State and territory agencies",
                description: "This category has the following 9 subcategories<br> 1. Law enforcement agencies of Australia by state or territory‎<br>2. Government agencies of the Australian Capital Territory‎<br>3. Government agencies of New South Wales‎<br>4.Government agencies of the Northern Territory‎<br>5. Government agencies of Queensland‎<br>6. Government agencies of South Australia‎<br>7. Government agencies of Tasmania<br>8. Government agencies of Victoria (state)‎<br>9. Government agencies of Western Australia",
                image: ""}
            ]},
            {name: "Services",
            description: "Government agencies in Australia provide a wide range of services to the public, covering areas such as health, education, employment, social services, transport, and environment, among others. These services aim to meet the needs and improve the wellbeing of Australians across the country.",
            image: "service-gov-agencies.jpg",
            children: [
                {name: "Australian Dietary Guidelines",
                description: "The Australian dietary guidelines (the guidelines) provide up-to-date advice about the amount and kinds of foods that we need to eat for health and wellbeing. The recommendations are based on scientific evidence, developed after looking at good quality research.",
                image: ""},
                {name: "Australian Physical Activity Guidelines",
                description: "Staying active regularly is essential for good physical and mental health and wellbeing.To help Australians understand how much activity they need,there is a physical activity and sedentary behaviour guidelines for each age group and for pregnancy.",
                image: ""},
                {name: "Primary Health Networks (PHN)",
                description: "Primary Health Networks (PHNs) assess the health care needs of their community and commission health services to meet those needs, minimising gaps or duplication. They support health services to connect with each other to improve people’s care and strengthen the primary health care system.",
                image: ""}
            ]}
        ]
        }
    ]
}