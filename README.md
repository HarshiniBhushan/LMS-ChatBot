# LMS-ChatBot
A role-based LMS chatbot designed for students, faculty, and parents, enabling each user to log in and receive personalized academic assistance, including doubt resolution, course guidance, and real-time support.


Key Features
  Role-Based Access Control
    Supports three user roles: Student, Faculty, and Parent
    Each user logs in through a dedicated interface
    Ensures a personalized and role-specific experience

  Interactive FAQ Navigation
    Displays categorized FAQ keyword tabs after login
    Each tab is implemented as a dropdown menu
    Expanding a tab reveals related frequently asked questions

  Chatbot Interaction Model
    Selecting an FAQ automatically:
     Displays the selected query as a user chat bubble
     Triggers an instant chatbot response

  Manual Query Support
    Users can enter custom queries via an input field
    The chatbot processes and responds to queries not covered in FAQs

  Real-Time Conversational Interface
    Seamless chat experience with dynamic message bubbles
    Immediate response generation for both predefined and user-entered queries

  Workflow
    User selects their role (Student / Faculty / Parent)
    User logs into the system
    The system displays FAQ keyword tabs (dropdown menus)
    User interaction can follow two paths:
      Predefined Queries:
        User selects a keyword tab
        Chooses a question from the dropdown
        Question appears as a user message
        Chatbot responds instantly
      Custom Queries:
        User types a query in the input field
        Submits the query
        Chatbot generates and displays a response

  User Interaction Design
    Dropdown-based FAQ exploration for quick access
    Chat bubble simulation for natural conversation flow
Dual query handling system:
Predefined (FAQ-based)
Dynamic (user-input-based)
