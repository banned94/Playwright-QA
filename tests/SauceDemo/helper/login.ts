import { SauceDemoAssets as MyPage } from '../data/saucedemo_assets';
import { credentials } from '../../config/credential';


export async function login(page : any) {
 const saucedemo = new MyPage(page);
 await page.goto(saucedemo.url);  
 await saucedemo.UsernameField.fill(credentials.username);
 await saucedemo.PasswordField.fill(credentials.password);
 await saucedemo.LoginButton.click();
}