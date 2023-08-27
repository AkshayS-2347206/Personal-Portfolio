import xmlschema

xml_file = "ShopSmart.xml"
xsd_file = "ShopSmart.xsd"

validator = xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML File is valid against the XSD Schema.")
else:
    print("XML File is not valid against the XSD Schema.")
    try:
        print(validator.validate(xml_file))
    except xmlschema.validators.exceptions.XMLSchemaDecodeError as exception:
        print(exception.reason)
