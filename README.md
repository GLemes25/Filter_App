# Filter_App

        #AMBIENTE REACT NATIVE

    Instalar NodeJs

$sudo apt install nodejs 
$sudo apt install npm

    Instalar JDK 11

$sudo apt-get install openjdk-11-jdk

    Instalar Android studio

$sudo add-apt-repository ppa:maarten-fonville/android-studio 
$sudo apt-get update
$sudo apt-get install android-studio

garanta que "Android SDK", "Android SDK Platform" e "Android Virtual Device" sejam instalados

click em "Configure"/":" -> "SDK Manager"
selecione Android 11 (R)
em peckage Details garanta que sera marcado "Android SDK Platform 30" e
"Intel x86 Atom_64 System Image" ou "Google APIs Intel x86 Atom System Image"

crie um virtual device R(android 11)

se preciso na bios coloque como enable o Virtuization Technology



adicione no bashrc

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

(vim para inserir em arquivo e :x para sair e salvar  )

npm install -g react-native-cli 