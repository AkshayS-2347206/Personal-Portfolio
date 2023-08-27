from lxml import etree

# Load XML
xml_tree = etree.parse("ShopSmart.xml")

# Load XSL
xsl_transform = etree.XSLT(etree.parse("ShopSmart.xsl"))

# Apply XSLT transformation
html_tree = xsl_transform(xml_tree)


# write transformed HTML to a file
with open("ShopSmart.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))
