import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Psychoanalysis',
        image: General_physician
    },
    {
        speciality: 'Gestalt Therapy',
        image: Gynecologist
    },
    {
        speciality: 'Cognitive Behavioral Therapy (CBT)',
        image: Dermatologist
    },
    {
        speciality: 'Family Therapy',
        image: Pediatricians
    },
    {
        speciality: 'Psychotherapy',
        image: Neurologist
    },
    {
        speciality: 'Art Therapy',
        image: Gastroenterologist
    },
]

export const therapists = [
    {
        _id: 'ther1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'Psychoanalysis',
        degree: 'PhD in Clinical Psychology',
        experience: '12 Years',
        about: 'Richard practices classical psychoanalysis, focusing on uncovering unconscious conflicts rooted in early life experiences. His sessions emphasize the therapeutic relationship and the exploration of recurring patterns in thoughts, behaviors, and relationships. Richard helps clients develop deeper self-understanding, emotional resilience, and greater freedom from limiting beliefs. His work is particularly helpful for individuals struggling with long-term emotional difficulties, relationship issues, or unresolved trauma.',
        fees: 85,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'London'
        }
    },
    {
        _id: 'ther2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gestalt Therapy',
        degree: 'MSc in Psychology',
        experience: '7 Years',
        about: 'Emily uses Gestalt therapy to bring awareness to the present moment, helping clients connect with their emotions, body sensations, and environment. She emphasizes personal responsibility and encourages clients to experiment with new ways of relating during sessions. Emily supports individuals experiencing anxiety, depression, and interpersonal difficulties by fostering authenticity and self-acceptance. Her approach creates a safe space for growth through experiential dialogue and mindful awareness.',
        fees: 70,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Cognitive Behavioral Therapy (CBT)',
        degree: 'MSc in Clinical Psychology',
        experience: '6 Years',
        about: 'Sarah specializes in CBT, guiding clients to identify and change unhelpful thinking and behavior patterns. She provides structured, evidence-based tools for managing anxiety, depression, and stress. Her sessions focus on goal-setting, coping skills, and practical strategies that empower clients to regain control of their lives. Sarah combines warmth with a structured approach, ensuring clients feel supported while actively working toward measurable improvements in mental health.',
        fees: 65,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Family Therapy',
        degree: 'PhD in Family Psychology',
        experience: '14 Years',
        about: 'Christopher works with couples and families to improve communication, resolve conflicts, and build stronger connections. His systemic approach helps clients understand how family dynamics influence individual wellbeing. Christopher supports parents navigating challenges with children, couples facing relational strain, and families adapting to life transitions. He emphasizes collaboration and practical solutions, ensuring all voices are heard in the therapeutic process.',
        fees: 90,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Art Therapy',
        degree: 'MA in Art Therapy',
        experience: '8 Years',
        about: 'Jennifer integrates creative expression with psychological insight, using art therapy as a pathway to healing. She encourages clients to explore their inner world through drawing, painting, and other creative mediums. Jennifer’s approach is especially helpful for individuals who struggle to express emotions verbally, including children and trauma survivors. By focusing on the process rather than artistic skill, she helps clients access unconscious feelings and develop new coping strategies.',
        fees: 75,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Psychotherapy',
        degree: 'PhD in Psychotherapy',
        experience: '16 Years',
        about: 'Andrew provides integrative psychotherapy tailored to each client’s needs, drawing from multiple therapeutic modalities. He emphasizes the importance of the therapeutic relationship as a foundation for healing. Andrew supports clients struggling with identity, life transitions, or persistent emotional pain, creating space for self-reflection and transformation. His holistic approach bridges insight and action, guiding clients toward a more authentic and fulfilling life.',
        fees: 85,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'Gestalt Therapy',
        degree: 'MSc in Psychology',
        experience: '9 Years',
        about: 'Christopher emphasizes present-moment awareness and the integration of thoughts, feelings, and behaviors. His Gestalt sessions often include role-play, dialogue, and creative experiments to uncover hidden patterns. He helps clients develop greater self-acceptance and authenticity in relationships. Christopher’s approach is well-suited for individuals who feel stuck or disconnected from their emotions and wish to experience life more fully.',
        fees: 70,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Cognitive Behavioral Therapy (CBT)',
        degree: 'MSc in Clinical Psychology',
        experience: '5 Years',
        about: 'Timothy applies evidence-based CBT methods to address anxiety disorders, phobias, and depression. His structured sessions provide clients with practical tools to challenge unhelpful beliefs and build resilience. Timothy combines compassion with accountability, ensuring clients stay motivated while progressing toward their therapeutic goals. He particularly enjoys helping clients break cycles of avoidance and regain confidence in everyday life.',
        fees: 65,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Art Therapy',
        degree: 'MA in Art Therapy',
        experience: '7 Years',
        about: 'Ava uses creative expression to help clients access emotions and unconscious material in a safe, supportive environment. She integrates elements of mindfulness and narrative therapy into her art-based sessions. Ava’s work is particularly valuable for clients dealing with trauma, grief, or emotional numbness. By combining psychological insight with artistic exploration, she supports clients in discovering new perspectives and healing pathways.',
        fees: 75,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Family Therapy',
        degree: 'MSc in Family Counseling',
        experience: '11 Years',
        about: 'Jeffrey specializes in systemic family therapy, helping families navigate challenges such as conflict, parenting stress, and generational patterns. He emphasizes the role of communication and emotional attunement in creating healthier relationships. Jeffrey works collaboratively with families to develop practical tools for conflict resolution and emotional connection. His calm, supportive presence fosters trust and openness in sessions.',
        fees: 85,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Jungian Psychoanalysis',
        degree: 'PhD in Analytical Psychology',
        experience: '9 Years',
        about: 'Zoe is a Jungian psychoanalyst who helps clients explore dreams, archetypes, and the unconscious to uncover hidden meaning in their lives. Her approach emphasizes individuation, the process of integrating the shadow and discovering the authentic self. Zoe works with clients to address deep existential questions, unresolved conflicts, and spiritual crises. She creates a safe container for symbolic exploration, where clients can find healing through myth, imagination, and inner dialogue. Her sessions often lead to profound insights and long-lasting personal transformation.',
        fees: 90,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Psychotherapy',
        degree: 'MSc in Psychotherapy',
        experience: '12 Years',
        about: 'Patrick provides integrative psychotherapy with a focus on long-term personal growth. He supports clients dealing with identity issues, loss, and chronic emotional distress. Patrick’s sessions blend insight-oriented dialogue with practical strategies, encouraging clients to connect deeply with themselves and others. His calm, reflective presence creates space for exploring difficult emotions while building resilience and meaning in life.',
        fees: 85,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'Gestalt Therapy',
        degree: 'MSc in Psychology',
        experience: '8 Years',
        about: 'Chloe uses Gestalt therapy to help clients reconnect with their emotions and bodies. She emphasizes the here-and-now experience, encouraging clients to notice and experiment with new behaviors. Chloe supports people facing anxiety, relational difficulties, and low self-esteem. Her sessions are interactive and creative, helping clients break free from old patterns and discover new ways of being.',
        fees: 70,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Cognitive Behavioral Therapy (CBT)',
        degree: 'MSc in Clinical Psychology',
        experience: '6 Years',
        about: 'Ryan is a CBT therapist who focuses on helping clients challenge cognitive distortions and adopt healthier behaviors. He specializes in treating phobias, panic attacks, and social anxiety. Ryan’s structured yet empathetic style ensures clients feel supported while making tangible progress. He equips clients with lifelong coping strategies, empowering them to manage future challenges with confidence.',
        fees: 65,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ther15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Psychoanalysis',
        degree: 'PhD in Clinical Psychology',
        experience: '13 Years',
        about: 'Amelia provides traditional psychoanalytic therapy, exploring unconscious motivations and unresolved conflicts. She works with clients to understand the impact of childhood experiences on current relationships and emotional struggles. Amelia’s sessions are reflective and supportive, creating a space where clients can process long-standing issues at a deep level. Her goal is to foster greater self-knowledge, emotional freedom, and lasting personal change.',
        fees: 85,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]