from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors

# Create PDF
pdf_path = "public/Avinash_Bansode_Resume.pdf"
doc = SimpleDocTemplate(pdf_path, pagesize=letter, topMargin=0.4*inch, bottomMargin=0.4*inch, leftMargin=0.5*inch, rightMargin=0.5*inch)
story = []

# Styles
title_style = ParagraphStyle(
    'Title',
    fontSize=20,
    textColor=colors.HexColor('#000000'),
    spaceAfter=2,
    alignment=0,
    fontName='Helvetica-Bold'
)

contact_style = ParagraphStyle(
    'Contact',
    fontSize=9,
    textColor=colors.HexColor('#333333'),
    spaceAfter=8,
    alignment=0
)

section_heading_style = ParagraphStyle(
    'SectionHeading',
    fontSize=11,
    textColor=colors.HexColor('#000000'),
    spaceAfter=6,
    spaceBefore=8,
    fontName='Helvetica-Bold',
    borderColor=colors.HexColor('#000000'),
    borderWidth=0.5,
    borderPadding=4
)

body_style = ParagraphStyle(
    'Body',
    fontSize=9,
    leading=11,
    spaceAfter=4
)

# Title and Contact
story.append(Paragraph("AVINASH BANSODE", title_style))
story.append(Paragraph("Pune, India | +91-7829-505083 | avinashbansode08@gmail.com | linkedin.com/in/avinashbansode08", contact_style))

# Career Objective
story.append(Paragraph("CAREER OBJECTIVE", section_heading_style))
objective_text = "Motivated and detail-oriented Frontend and Full-Stack Developer with strong fundamentals in web technologies. Seeking an entry-level opportunity in web development to contribute to real-world projects and continuously enhance any technical skills."
story.append(Paragraph(objective_text, body_style))
story.append(Spacer(1, 0.08*inch))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
skills_data = [
    ["<b>Frontend UI/UX:</b>", "HTML5, CSS3, JavaScript, React (ES6+), React"],
    ["<b>Tools &amp; Git:</b>", "Git, GitHub, VS Code"],
    ["<b>Basics:</b>", "REST APIs, JSON, Browser Debugging"],
]
skills_table = Table(skills_data, colWidths=[1.3*inch, 4.2*inch])
skills_table.setStyle(TableStyle([
    ('FONT', (0, 0), (-1, -1), 'Helvetica', 9),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ('TOPPADDING', (0, 0), (-1, -1), 2),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
]))
story.append(skills_table)
story.append(Spacer(1, 0.08*inch))

# Projects
story.append(Paragraph("PROJECTS", section_heading_style))

story.append(Paragraph("<b>Hotel Management System (React's UI)</b>", body_style))
project1_points = [
    "• Designed professional and responsive Hotel UI using React",
    "• Implemented modern bookings, property listings, and availability and user-friendly experience"
]
for point in project1_points:
    story.append(Paragraph(point, body_style))

story.append(Spacer(1, 0.05*inch))

story.append(Paragraph("<b>Shopify Multivendor Platform</b>", body_style))
project2_points = [
    "• Developed a modern shopping website interface with product cards and navigation",
    "• Implemented secure filtering and structured layouts and intuitive layout devices"
]
for point in project2_points:
    story.append(Paragraph(point, body_style))

story.append(Spacer(1, 0.08*inch))

# Education
story.append(Paragraph("EDUCATION", section_heading_style))
education_data = [
    ["<b>Bachelor of Computer Applications (B.C.A)</b>", "2022 - 2025"],
    ["Sarthak College (Swati)", ""],
    ["<b>Higher Secondary Certificate (12th)</b>", "Percentage: 48%"],
    ["<b>Secondary School Certificate (10th)</b>", "Percentage: 66%"],
]
education_table = Table(education_data, colWidths=[3.5*inch, 1.5*inch])
education_table.setStyle(TableStyle([
    ('FONT', (0, 0), (-1, -1), 'Helvetica', 9),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 5),
    ('TOPPADDING', (0, 0), (-1, -1), 2),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
]))
story.append(education_table)
story.append(Spacer(1, 0.08*inch))

# Experience
story.append(Paragraph("EXPERIENCE", section_heading_style))
story.append(Paragraph("<b>Fresher</b> - Interested in gaining through academic projects and self-learning in frontend development using React.", body_style))

# Build PDF
doc.build(story)
print("✓ Resume created successfully: public/Avinash_Bansode_Resume.pdf")
