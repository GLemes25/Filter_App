# exportar um APK

1. Gerar a keystore com o seguinte comando:
   keytool -genkeypair -v -storetype PKCS12 -keystore mensurepec.keystore -alias mensurepec -keyalg RSA -keysize 2048 -validity 10000

   pass: !dTYi7!3t@&H%y8gXyL$
   name: MensurePec
   organizational: MensurePec
   organization: MensurePec
   city: Campo Grande
   state: MS
   country: BR

2. Jogar o arquivo keystore gerado em andorid/app

3. Ir para pasta android e executar o seguinte comando:
   ./gradlew bundleRelease

4. Se tudo der certo a aplicação poderá ser encontrada em: android/app/build/outputs/bundle
