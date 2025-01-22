import os
import xml.etree.ElementTree as ET

def extract_svg_paths(folder_path, output_js_file):
    """
    Extracts the `d` attribute from the `<path>` tag in SVG files and writes it to a JS dict.
    
    :param folder_path: Path to the folder containing SVG files.
    :param output_js_file: Path to the output JavaScript file.
    """
    letter_coordinates = {}

    # Iterate through files in the folder
    for filename in os.listdir(folder_path):
        if filename.endswith(".svg"):
            file_path = os.path.join(folder_path, filename)
            try:
                # Parse the SVG file
                tree = ET.parse(file_path)
                root = tree.getroot()
                # Extract the path `d` attribute
                path = root.find('.//{http://www.w3.org/2000/svg}path')
                if path is not None and 'd' in path.attrib:
                    letter_coordinates[os.path.splitext(filename)[0]] = path.attrib['d']
                else:
                    print(f"No <path> with 'd' attribute found in {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

    # Write the JavaScript dictionary to the output file
    with open(output_js_file, "w", encoding="utf-8") as js_file:
        js_file.write("const letterCoordinatesToRender = {\n")
        for key, value in letter_coordinates.items():
            js_file.write(f'  "{key}": "{value}",\n')
        js_file.write("};\n")

# Example usage
input_folder = "assets/alphabet/vector/outline" # Replace with the path to your SVG folder
output_file = "assets/alphabet/vector/temp.js"   # Replace with the path to your output JS file
extract_svg_paths(input_folder, output_file)
