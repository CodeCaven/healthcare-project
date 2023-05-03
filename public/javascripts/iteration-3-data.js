

/* Health Care System Tree (EPIC 6) */


var healthTree = {};

healthTree["nodes"] = 
[ 
    { id: "node1", title: "National Health Act",   description: "This was passed in ...", svg: ""}, 
    { id: "node2", title: "Medicare", description: "Medicare provides...", svg: ""},
    { id: "node3", title: "Private Health Insurance", description: "Australians can take out...", svg: ""}
];

healthTree["links"] = 
[ 
    { source: "node1",   target: "node2"}, 
    { source: "node1",   target: "node3"}
];