var nodes = [
    {
        "name": "Varsha",
        "group": 1,
        "nodesize": 30
    },
    {
        "name": "Programming Languages",
        "group": 1,
        "nodesize": 5
    },
    {
        "name": "Version Control",
        "group": 1,
        "nodesize": 5
    },
    {
        "name": "Task Tracking",
        "group": 1,
        "nodesize": 5
    },
    {
        "name": "Prototyping",
        "group": 1,
        "nodesize": 5
    },
    {
        "name": "Database Management",
        "group": 1,
        "nodesize": 5
    },
    {
        "name": "Other",
        "group": 1,
        "nodesize": 5
    },
    {
        "name": "JavaScript",
        "group": 2,
        "nodesize": 20
    },
    {
        "name": "Libraries",
        "group": 2,
        "nodesize": 5
    },
    {
        "name": "Framework",
        "group": 2,
        "nodesize": 5
    },
    {
        "name": "JQuery",
        "group": 3,
        "nodesize": 10
    },
    {
        "name": "D3.js",
        "group": 3,
        "nodesize": 20
    },
    {
        "name": "Vue.js",
        "group": 3,
        "nodesize": 20
    },
    {
        "name": "HTML5",
        "group": 2,
        "nodesize": 20
    },
    {
        "name": "CSS",
        "group": 2,
        "nodesize": 20
    },
    {
        "name": "Python",
        "group": 2,
        "nodesize": 5
    },
    {
        "name": "C++",
        "group": 3,
        "nodesize": 5
    },
    {
        "name": "OpenGL",
        "group": 3,
        "nodesize": 10
    },
    {
        "name": "Git",
        "group": 2,
        "nodesize": 10
    },
    {
        "name": "JIRA",
        "group": 2,
        "nodesize": 10
    },
    {
        "name": "Microsoft Visio",
        "group": 2,
        "nodesize": 5
    },
    {
        "name": "Moqups",
        "group": 2,
        "nodesize": 5
    },
    {
        "name": "Photoshop",
        "group": 2,
        "nodesize": 10
    },
    {
        "name": "PostgreSQL",
        "group": 2,
        "nodesize": 5
    },
    {
        "name": "Documentation",
        "group": 3,
        "nodesize": 5
    },
    {
        "name": "Confluence",
        "group": 3,
        "nodesize": 5
    },
    {
        "name": "Text Editing/IDE",
        "group": 3,
        "nodesize": 5
    },
    {
        "name": "Sublime",
        "group": 3,
        "nodesize": 5
    },
    {
        "name": "Microsoft Visual Studio Code",
        "group": 3,
        "nodesize": 5
    }, 
];
var links = [
	{
        "source": "Varsha",
        "target": "Programming Languages",
        "value": 10
    },
    {
        "source": "Programming Languages",
        "target": "JavaScript",
        "value": 10
    },
    {
        "source": "JavaScript",
        "target": "Libraries",
        "value": 10
    },
    {
        "source": "JavaScript",
        "target": "Framework",
        "value": 10
    },
    {
        "source": "Libraries",
        "target": "D3.js",
        "value": 10
    },
    {
        "source": "Libraries",
        "target": "JQuery",
        "value": 10
    },
    {
        "source": "Framework",
        "target": "Vue.js",
        "value": 10
    },
    {
        "source": "Programming Languages",
        "target": "HTML5",
        "value": 10
    },
    {
        "source": "Programming Languages",
        "target": "CSS",
        "value": 10
    },
    {
        "source": "Programming Languages",
        "target": "Python",
        "value": 10
    },
    {
        "source": "Programming Languages",
        "target": "C++",
        "value": 10
    },
    {
        "source": "C++",
        "target": "OpenGL",
        "value": 10
    },
    {
        "source": "Varsha",
        "target": "Version Control",
        "value": 10
    },
    {
        "source": "Version Control",
        "target": "Git",
        "value": 10
    }, 
    {
        "source": "Varsha",
        "target": "Task Tracking",
        "value": 10
    },
    {
        "source": "Task Tracking",
        "target": "JIRA",
        "value": 10
    }, 
    {
        "source": "Varsha",
        "target": "Prototyping",
        "value": 10
    },
    {
        "source": "Prototyping",
        "target": "Photoshop",
        "value": 10
    },
    {
        "source": "Prototyping",
        "target": "Microsoft Visio",
        "value": 10
    },
    {
        "source": "Prototyping",
        "target": "Moqups",
        "value": 10
    }, 
    {
        "source": "Varsha",
        "target": "Database Management",
        "value": 10
    },
    {
        "source": "Database Management",
        "target": "PostgreSQL",
        "value": 10
    }, 
    {
        "source": "Varsha",
        "target": "Other",
        "value": 10
    },
    {
        "source": "Other",
        "target": "Text Editing/IDE",
        "value": 10
    },
    {
        "source": "Other",
        "target": "Documentation",
        "value": 10
    },
    {
        "source": "Documentation",
        "target": "Confluence",
        "value": 10
    },
    {
        "source": "Text Editing/IDE",
        "target": "Sublime",
        "value": 10
    },
    {
        "source": "Text Editing/IDE",
        "target": "Microsoft Visual Studio Code",
        "value": 10
    }, 
    
];