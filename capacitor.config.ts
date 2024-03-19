import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Todo-List',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
