import os

INPUT_FOLDER_PATH = "raw-assets/alphabet/animation/pencil"
OUTPUT_JS_FILE_PATH = "assets/alphabet/animation/pencil.js"

def __main__():
    """This python script is used to convert the SVGator videos to a dictionary in a JavaScript file.
    The input is a folder
    The output is a JavaScript file
    The output dictionary is in the format of export const folder_name = {video_file_name: video_data}"""

    # Get script directory:
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # The repository directory is the parent directory of the script directory
    repo_dir = os.path.dirname(script_dir)

    # Get the input folder path
    input_folder_path = os.path.join(repo_dir, INPUT_FOLDER_PATH)
    input_folder_name = os.path.basename(input_folder_path)
    # Get the output JavaScript file path
    output_js_file_path = os.path.join(repo_dir, OUTPUT_JS_FILE_PATH)

    # Get the list of files in the input folder
    files = os.listdir(input_folder_path)

    # strings to write to the output JavaScript file
    js_strs = []
    dict_keys = []

    # Loop through the files
    i = 0
    for file in files:
        file_name = os.path.splitext(file)[0]
        file_extension = os.path.splitext(file)[1]
        file_path = os.path.join(input_folder_path, file)

        dict_name = file_name.replace("-", "_")

        if file_extension == ".js":
            # Read the file as a string
            with open(file_path, "r") as f:
                file_str = f.read()
                # Find the string index that begins with: SVGatorPlayer.wrapPage
                index = file_str.find("SVGatorPlayer.wrapPage")
                # Find the string index that begins with \n}\n
                index_end = file_str.find(";\n}\n", index)
                # Get the substring that contains the video data
                video_data_str = file_str[index:index_end]
                # Check if the video data string ends with )
                if not video_data_str.endswith(")"):
                    print(f"Error: {file} extracted string does not end with )")
                    raise Exception
                js_strs.append(video_data_str)
                dict_keys.append(dict_name)

        
    # Construct the JavaScript string
    js_str = "// This file is generated by the script: svgator_videos_to_js_dict.py"
    js_str += "\n/* eslint-disable react-hooks/exhaustive-deps */"
    js_str += "\n// @ts-nocheck"
    js_str += '\nimport SVGatorPlayer from "@svgator/react-native";'
    js_str += f"\n\nconst {input_folder_name} = {{\n"
    for i in range(len(js_strs)):
        js_str += f"    {dict_keys[i]}: {js_strs[i]},\n"
    js_str += "};"
    js_str += f"\n\nexport default {input_folder_name};"

    # create the output folder
    output_folder = os.path.dirname(output_js_file_path)
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Write the JavaScript string to the output JavaScript file
    print(output_js_file_path)
    with open(output_js_file_path, "w") as f:
        f.write(js_str)
    print("JavaScript file is written successfully")
    print("Contains keys: ", dict_keys)

if __name__ == "__main__":
    __main__()
