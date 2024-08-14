# Chrome Extension Starter Kit
Bu proje, yeni Chrome uzantıları geliştirmeye başlarken temel bir yapı ve özellikleri 
sağlamak için tasarlanmıştır. Bu starter kit, Chrome uzantılarını geliştirirken başlangıç 
için bir şablon sağlar ve geliştirme sürecinizi hızlandırır.

## Başlangıç
Bu başlangıç kitini kullanarak yeni bir Chrome uzantısı projesi başlatmak için aşağıdaki
 adımları izleyin:

1. Repositoriyi klonlayın:
    ```bash
    git clone https://github.com/seyitmustafaademk/chrome-extension-starter-kit
    ```

2. Proje dizinine gidin:
    ```bash
    cd chrome-extension-starter
    ```

3. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

4. Uzantının production modunu derleyin:
    ```bash
    npx webpack --mode=production
    ```

5. Uzantıyı tarayıcınıza yükleyin:
    - Chrome tarayıcınızda `chrome://extensions/` adresine gidin.
    - Sağ üst köşede bulunan "Geliştirici modu"nu etkinleştirin.
    - "Paketlenmemiş uzantıyı yükle" butonuna tıklayın ve `dist` klasörünü seçin.
    



## Özellikler

### 1. Manifest Dosyası Yapılandırması
`manifest.json` dosyası, uzantınızın temel yapılandırmasını sağlar. Uzantınızın adı, sürümü, 
ikonları, izinleri ve hangi dosyaların dahil edileceği gibi bilgileri burada tanımlarsınız.

### 2. Dil Desteği
Uzantınızı çok dilli yapmak için `_locales` klasöründe dil dosyalarını yönetin. Her dil için 
ayrı bir klasör ve `messages.json` dosyası oluşturarak, uzantınızın farklı dillerde 
kullanılmasını sağlayabilirsiniz.

### 3. Popup ve Options Sayfaları
- **Popup**: Kullanıcı arayüzü için `popup` klasöründe `popup.html` ve `popup.js` dosyalarını 
 kullanabilirsiniz. Popup, kullanıcı etkileşimlerini hızlı bir şekilde yönetmek için kullanılır.   
 Popup sayfasında varsayılan olarak Dark Mode özelliği ve Ayarlar butonu bulunmaktadır.  

- **Options**: Kullanıcıların uzantınızın ayarlarını yönetebileceği `options` klasöründe 
 `options.html` ve `options.js` dosyalarını kullanabilirsiniz.  
  Options sayfası, varsayılan olarak dil seçimi ve koyu mod özelliği ayarlarını içerir.
 

### 4. Scripting Klasörü

`scripting/utils` altında kullanışlı yardımcı sınıflarınızı ve iş mantığınızı organize 
 edebilirsiniz. Örneğin:

- **Bookmark Manager**: Yer imi yöneticisi sınıfı, tarayıcı yer imlerini yönetmek için 
 kullanılabilir.
- **Context Menu Manager**: Sağ tıklama menüsü yöneticisi sınıfı, tarayıcı sağ tıklama 
 menülerini yönetmek için kullanılabilir.
- **Message Manager**: Uzantı içi dosya ve sayfalar arasında mesajlaşmayı yöneten sınıf.
- **Notification Manager**: Bildirim yöneticisi sınıfı, tarayıcı bildirimlerini yönetmek 
 için kullanılabilir.
- **Storage Manager**: Gelişmiş depolama yöneticisi, `chrome.storage.local` API'sini 
 kullanarak verileri yönetir.
- **Session Manager**: Oturum yöneticisi sınıfı, kullanıcı oturum bilgilerini yönetmek 
 için kullanılabilir.
- **Cookie Manager**: Çerez yöneticisi sınıfı, tarayıcı çerezlerini yönetmek için 
 kullanılabilir.
- **Tab Manager**: Sekme yöneticisi sınıfı, tarayıcı sekmelerini yönetmek için 
 kullanılabilir.
- **Dark Mode Manager**: Koyu mod yöneticisi sınıfı, koyu modu etkinleştirmek ve 
 devre dışı bırakmak için kullanılabilir.


## Geliştirme
Projenizi geliştirirken, değişiklikleri yapın ve aşağıdaki komutlarla projenizi derleyin 
ve test edin:

```bash
# Development modunda uzantıyı başlatın
npx webpack --mode=development --watch
```

```bash
# Production modunda uzantıyı derleyin
npx webpack --mode=production
```

Geliştirme sırasında sürekli olarak değişiklikleri izlemek için aşağıdaki komutu kullanın:
```bash
npm run watch
```