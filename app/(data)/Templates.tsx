export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on yout blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },

    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },

    {
        name: 'Diet Meal Planner',
        desc: 'An AI tool that generates a personalized weekly meal plan based on your weight, height, gender, food preference, calorie goals, and region.',
        category: 'Health & Diet',
        icon: 'https://icons.veryicon.com/png/o/food--drinks/light-diet/light-food.png',
        aiPrompt: `Generate a healthy and personalized 7-day meal plan based on the user's details: weight, height, gender, country, food preference (vegetarian or non-vegetarian), calorie goals (weight loss, maintenance, or weight gain), food dislikes, and preferred cuisines.
            The meal plan should be organized by days (Monday to Sunday), and for each day provide meal suggestions for:
                - Breakfast
                - Lunch
                -Evening snacks
                - Dinner

            Start with a short introduction about the user’s profile and calorie goals.
            Format the output using Markdown or simple rich text with headings and bold text, suitable for display in a WYSIWYG rich text editor. Do not use RTF code or curly braces formatting.`,
        slug: 'generate-diet-meal-plan',
        form: [
            {
                label: 'Enter your weight (in kg)',
                field: 'input',
                name: 'weight',
                required: true
            },
            {
                label: 'Enter your height (in cm)',
                field: 'input',
                name: 'height',
                required: true
            },
            {
                label: 'Select your gender',
                field: 'select',
                name: 'gender',
                required: true,
                options: ['Male', 'Female', 'Other']
            },
            {
                label: 'Food Preference',
                field: 'select',
                name: 'foodType',
                required: true,
                options: ['Vegetarian', 'Non-Vegetarian']
            },
            {
                label: 'Enter your country',
                field: 'input',
                name: 'country',
                required: true
            },
            {
                label: 'Select your calorie goal',
                field: 'select',
                name: 'goal',
                required: true,
                options: ['Weight Loss', 'Maintenance', 'Weight Gain']
            },
            {
                label: 'Do you have any food allergies or dietary restrictions?',
                field: 'textarea',
                name: 'allergies'
            },
            {
                label: 'List any food items you dislike',
                field: 'textarea',
                name: 'dislikes'
            },
            {
                label: 'Preferred cuisines (optional)',
                field: 'select',
                name: 'cuisines',
                required: false,
                multiple: true,
                options: ['Indian', 'Italian', 'Chinese', 'Mexican', 'Thai', 'Mediterranean']
            }
        ]
    },

    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },

    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',

        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',

        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',

        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',

        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required: true
            },

        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',

        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',

        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',

        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },

        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',

        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',

        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
    {
        name: 'Daily Planner',
        desc: 'Generate an optimized daily schedule based on your tasks and priorities',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png',
        slug: 'daily-planner',
        aiPrompt: 'Create a detailed daily schedule with time blocks for the following tasks. Include breaks and prioritize important tasks. Format for easy reading.',
        form: [
            {
                label: 'List your tasks (separate with commas)',
                field: 'textarea',
                name: 'tasks',
                required: true
            },
            {
                label: 'Available hours (e.g., 8am-6pm)',
                field: 'input',
                name: 'hours',
                required: true
            },
            {
                label: 'Important tasks to prioritize',
                field: 'input',
                name: 'priorities'
            }
        ]
    },
    {
        name: 'Email Writer',
        desc: 'Compose professional emails quickly for any purpose',
        category: 'Communication',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
        slug: 'email-writer',
        aiPrompt: 'Write a professional email based on the following details. Use appropriate tone and structure.',
        form: [
            {
                label: 'Email purpose (e.g., follow-up, request, complaint)',
                field: 'input',
                name: 'purpose',
                required: true
            },
            {
                label: 'Key points to include',
                field: 'textarea',
                name: 'points',
                required: true
            },
            {
                label: 'Tone (formal, friendly, etc.)',
                field: 'select',
                name: 'tone',
                options: ['Formal', 'Friendly', 'Persuasive', 'Apologetic']
            }
        ]
    },
    {
        name: 'Meeting Notes Summarizer',
        desc: 'Convert lengthy meeting notes into concise summaries',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050520.png',
        slug: 'meeting-summarizer',
        aiPrompt: 'Summarize these meeting notes into key points, decisions, and action items. Remove unnecessary details.',
        form: [
            {
                label: 'Paste your meeting notes',
                field: 'textarea',
                name: 'notes',
                required: true
            },
            {
                label: 'Important topics to highlight',
                field: 'input',
                name: 'topics'
            }
        ]
    },
    {
        name: 'Personal Finance Advisor',
        desc: 'Get personalized financial advice and budgeting tips',
        category: 'Finance',
        icon: 'https://cdn-icons-png.flaticon.com/128/2933/2933245.png',
        slug: 'finance-advisor',
        aiPrompt: 'Provide financial advice based on the user\'s income, expenses, and goals. Include budgeting tips and savings strategies.',
        form: [
            {
                label: 'Monthly income',
                field: 'input',
                name: 'income',
                required: true
            },
            {
                label: 'Monthly expenses',
                field: 'textarea',
                name: 'expenses',
                required: true
            },
            {
                label: 'Financial goals',
                field: 'input',
                name: 'goals'
            }
        ]
    },
    {
        name: 'Quick Recipe Generator',
        desc: 'Get meal ideas based on ingredients you have',
        category: 'Food',
        icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081985.png',
        slug: 'quick-recipes',
        aiPrompt: 'Suggest 3 simple recipes that can be made with these ingredients. Include preparation time and steps.',
        form: [
            {
                label: 'Ingredients you have (separate with commas)',
                field: 'textarea',
                name: 'ingredients',
                required: true
            },
            {
                label: 'Dietary restrictions',
                field: 'input',
                name: 'restrictions'
            }
        ]
    },
    {
        name: 'Fitness Routine Generator',
        desc: 'Create personalized workout plans based on your goals',
        category: 'Fitness',
        icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936886.png',
        slug: 'fitness-routine',
        aiPrompt: 'Create a weekly fitness routine based on the user\'s goals, available equipment, and time commitment.',
        form: [
            {
                label: 'Fitness goal',
                field: 'select',
                name: 'goal',
                options: ['Weight Loss', 'Muscle Gain', 'Endurance', 'General Fitness'],
                required: true
            },
            {
                label: 'Available equipment',
                field: 'input',
                name: 'equipment'
            },
            {
                label: 'Days per week',
                field: 'select',
                name: 'days',
                options: ['3', '4', '5', '6']
            }
        ]
    },
    {
        name: 'Travel Itinerary Planner',
        desc: 'Generate detailed travel plans for your trips',
        category: 'Travel',
        icon: 'https://cdn-icons-png.flaticon.com/128/1809/1809516.png',
        slug: 'travel-planner',
        aiPrompt: 'Create a detailed travel itinerary including attractions, restaurants, and transportation options based on the destination and preferences.',
        form: [
            {
                label: 'Destination',
                field: 'input',
                name: 'destination',
                required: true
            },
            {
                label: 'Trip duration',
                field: 'input',
                name: 'duration',
                required: true
            },
            {
                label: 'Interests (e.g., history, food, nature)',
                field: 'input',
                name: 'interests'
            }
        ]
    },
    {
        name: 'Learning Path Generator',
        desc: 'Create personalized learning paths for any skill',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2232/2232688.png',
        slug: 'learning-path',
        aiPrompt: 'Design a step-by-step learning path for the requested skill, including resources and time estimates for each step.',
        form: [
            {
                label: 'Skill/subject to learn',
                field: 'input',
                name: 'skill',
                required: true
            },
            {
                label: 'Current level',
                field: 'select',
                name: 'level',
                options: ['Beginner', 'Intermediate', 'Advanced']
            },
            {
                label: 'Time available per week',
                field: 'input',
                name: 'time'
            }
        ]
    }
]