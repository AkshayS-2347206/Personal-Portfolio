from lxml import etree

# Load XML
xml_tree = etree.parse("amazon.xml")

# Load XSL
xsl_transform = etree.XSLT(etree.parse("amazon.xsl"))

# Apply XSLT transformation
html_tree = xsl_transform(xml_tree)


# write transformed HTML to a file
with open("amazon.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))
