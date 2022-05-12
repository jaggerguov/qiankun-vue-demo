## 1、当前脚本文件所在路径
  current_path=$(cd $(dirname $0); pwd)
  version='V0.1.0'
  ## 打印当前目录
  echo $current_path
  # 打印当前目录文件列表
  # echo $a* 
  #-----------------------------1、需要拉取的项目路径------------------
  ## 项目仓库本地文件路径
  base_url=$current_path
  # 开始pull拉取项目
  project_path=$base_url
  mkdir dist
  main="portal"
  main_dir=$project_path/$main
  cd $main_dir
  # git pull
    echo -e "\033[32m拉取项目：${main_dir} 成功\033[0m";
  yarn install
  yarn build
  mv dist $base_url/
  echo -e "\033[32m主应用编译项目：${main_dir} 成功\033[0m";
  #-------------------------2、设置需要编译的子应用项目路径----------------------
  cd ..
  module="subapp"
  mkdir dist/$module
  subapp_dir=$base_url/$module
    echo -e "子应用目录：${subapp_dir}";
  #-------------------------3、 开始 build 子应用项目--------------------------
  for dir in $(ls $subapp_dir)
  do
    project_path=$subapp_dir/$dir
    echo $project_path
    cd $project_path
    yarn install
    yarn build
    mv dist $current_path/dist/$module/$dir
    echo -e "\033[32m编译项目：${dir} 成功\033[0m";
  done
  #-------------------------4、 开始拷贝文件到服务器----------------------
  # /e/work/aehyok/github/qiankun 是我本地打包后的文件夹
  # scp -r /e/work/aehyok/github/qiankun/main root@139.186.205.7:/usr/local/qiankun/main/ 

echo "5秒后将自动退出本脚本："
  for i in $(seq 5 -1 1)
  do
    echo -e $i;sleep 1
  done
  exit
