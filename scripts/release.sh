website_folder="kingdaro.github.io"
output_folder_name="trello"
output_path=../$website_folder/$output_folder_name

yarn build
rm -rf $output_path
cp -r ./build $output_path
