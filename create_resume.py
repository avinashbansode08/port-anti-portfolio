from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from datetime import datetime

# Create PDF
pdf_path = "public/Avinash_Bansode_Resume.pdf"
doc = SimpleDocTemplate(pdf_path, pagesize=letter, topMargin=0.5*inch, bottomMargin=0.5*inch)
story = []

# Styles
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=colors.HexColor('#1a1a1a'),
    spaceAfter=6,
    alignment=0
)

heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontSize=12,
    textColor=colors.HexColor('#333333'),
    spaceAfter=6,
    spaceBefore=10,
    fontName='Helvetica-Bold',
    borderColor=colors.HexColor('#6d28d9'),
    borderWidth=1,
    borderPadding=5,
)

normal_style = ParagraphStyle(
    'CustomNormal',
    parent=styles['Normal'],
    fontSize=10,
    leading=12
)

# Title
story.append(Paragraph("Avinash Bansode", title_style))
story.append(Paragraph("Pune, India | +91-7829-505083 | avinashbansode08@gmail.com", normal_style))
story.append(Spacer(1, 0.15*inch))

# Career Objective
story.append(Paragraph("Career Objective", heading_style))
objective_text = """Motivated and detail-oriented Frontend and Full-Stack Developer with strong fundamentals in web technologies. Seeking an entry-level opportunity in web development to contribute to real-world projects and continuously enhance my technical skills."""
story.append(Paragraph(objective_text, normal_style))
story.append(Spacer(1, 0.1*inch))

# Technical Skills
story.append(Paragraph("Technical Skills", heading_style))
skills_data = [
    ["Frontend UI/UX", "HTML5, CSS3, JavaScript, React"],
    ["Tools & Git", "Git, GitHub, VS Code"],
    ["Basics", "REST APIs, JSON, Browser Debugging"],
]
skills_table = Table(skills_data, colWidths=[1.5*inch, 3.5*inch])
skills_table.setStyle(TableStyle([
    ('FONT', (0, 0), (-1, -1), 'Helvetica', 9),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 5),
    ('RIGHTPADDING', (0, 0), (-1, -1), 5),
]))
story.append(skills_table)
story.append(Spacer(1, 0.1*inch))

# Projects
story.append(Paragraph("Projects", heading_style))

project1_title = Paragraph("<b>Hotel Management System (React's UI)</b>", normal_style)
project1_desc = Paragraph("Designed professional and responsive Hotel UI using React's UI. Implemented modern, user-friendly features, property listings, and booking experience.", normal_style)
story.append(project1_title)
story.append(project1_desc)
story.append(Spacer(1, 0.08*inch))

project2_title = Paragraph("<b>Shopify Multivendor Platform</b>", normal_style)
project2_desc = Paragraph("Developed a modern shopping website interface with product cards and navigation. Implemented secure filtering and intuitive layout devices for desktop and user-friendly experience.", normal_style)
story.append(project2_title)
story.append(project2_desc)
story.append(Spacer(1, 0.08*inch))

project3_title = Paragraph("<b>Enhanced Structured Layouts</b>", normal_style)
project3_desc = Paragraph("Optimized UI for desktop and mobile devices", normal_style)
story.append(project3_title)
story.append(project3_desc)
story.append(Spacer(1, 0.1*inch))

# Education
story.append(Paragraph("Education", heading_style))
education_data = [
    ["Bachelor of Computer Applications (B.C.A)", "2022 - 2025"],
    ["Higher Secondary Certificate (12th)", "Percentage: 48%"],
    ["Secondary School Certificate (10th)", "Percentage: 48%"],
]
education_table = Table(education_data, colWidths=[3.5*inch, 1.5*inch])
education_table.setStyle(TableStyle([
    ('FONT', (0, 0), (-1, -1), 'Helvetica', 9),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 5),
    ('RIGHTPADDING', (0, 0), (-1, -1), 5),
]))
story.append(education_table)
story.append(Spacer(1, 0.1*inch))

# Experience
story.append(Paragraph("Experience", heading_style))
exp_text = "Fresher - Interested in gaining through academic projects and self-learning in frontend development using React."
story.append(Paragraph(exp_text, normal_style))

# Build PDF
doc.build(story)
print(f"✓ Resume created successfully: {pdf_path}")
