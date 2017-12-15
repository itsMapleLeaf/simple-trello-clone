build_path="./dist"
publish_path="../kingdaro.github.io/trello"

yarn build
rm -rf $publish_path
cp -r $build_path $publish_path
