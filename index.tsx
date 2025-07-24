/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
/* tslint:disable */

import { marked } from 'marked';

// --- MOCK DATA ---
const QURAN_DATA = [
  {
    number: 1,
    name: 'الفاتحة',
    englishName: 'Al-Fatiha',
    numberOfAyahs: 7,
    revelationType: 'Meccan',
    ayahs: [
      { number: 1, text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', tadabbur: 'تبدأ الرحلة باسم الله، مصدر كل رحمة ونعمة.', audio: 'audio/001001.mp3' },
      { number: 2, text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', tadabbur: 'كل حمد وشكر له وحده، فهو رب كل شيء ومليكه.', audio: 'audio/001002.mp3' },
      { number: 3, text: 'الرَّحْمَٰنِ الرَّحِيمِ', tadabbur: 'تأكيد على رحمته التي وسعت كل شيء، لتطمئن القلوب.', audio: 'audio/001003.mp3' },
    ],
  },
  {
    number: 112,
    name: 'الإخلاص',
    englishName: 'Al-Ikhlas',
    numberOfAyahs: 4,
    revelationType: 'Meccan',
     ayahs: [
      { number: 1, text: 'قُلْ هُوَ اللَّهُ أَحَدٌ', tadabbur: 'إعلان الوحدانية المطلقة، أساس العقيدة.', audio: 'audio/112001.mp3' },
      { number: 2, text: 'اللَّهُ الصَّمَدُ', tadabbur: 'هو المقصود في كل الحوائج، لا يحتاج لأحد.', audio: 'audio/112002.mp3' },
      { number: 3, text: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', tadabbur: 'تنزه عن كل نقص، وعن صفات المخلوقين.', audio: 'audio/112003.mp3' },
      { number: 4, text: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', tadabbur: 'لا مثيل له ولا شبيه، تفرّد بالكمال المطلق.', audio: 'audio/112004.mp3' },
    ],
  },
];

const HADITH_DATA = [
    { title: 'أساس الأعمال', text: 'عن عمر بن الخطاب رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى..."', source: 'متفق عليه' },
    { title: 'منهج المسلم', text: 'عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: "مِنْ حُسْنِ إِسْلامِ الْمَرْءِ تَرْكُهُ مَا لا يَعْنِيهِ".', source: 'رواه الترمذي' },
];

const DUA_DATA = [
    { category: 'أدعية الصباح', text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.'},
    { category: 'أدعية المساء', text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.'},
    { category: 'دعاء الهم والحزن', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.'}
];

const PRAYERS = ['الفجر', 'الظهر', 'العصر', 'المغرب', 'العشاء'];

const ASMA_UL_HUSNA = [
  'الله', 'الرحمن', 'الرحيم', 'الملك', 'القدوس', 'السلام', 'المؤمن', 'المهيمن', 'العزيز', 'الجبار', 'المتكبر', 'الخالق', 'البارئ', 'المصور', 'الغفار', 'القهار', 'الوهاب', 'الرزاق', 'الفتاح', 'العليم', 'القابض', 'الباسط', 'الخافض', 'الرافع', 'المعز', 'المذل', 'السميع', 'البصير', 'الحكم', 'العدل', 'اللطيف', 'الخبير', 'الحليم', 'العظيم', 'الغفور', 'الشكور', 'العلي', 'الكبير', 'الحفيظ', 'المقيت', 'الحسيب', 'الجليل', 'الكريم', 'الرقيب', 'المجيب', 'الواسع', 'الحكيم', 'الودود', 'المجيد', 'الباعث', 'الشهيد', 'الحق', 'الوكيل', 'القوي', 'المتين', 'الولي', 'الحميد', 'المحصي', 'المبدئ', 'المعيد', 'المحيي', 'المميت', 'الحي', 'القيوم', 'الواجد', 'الماجد', 'الواحد', 'الأحد', 'الصمد', 'القادر', 'المقتدر', 'المقدم', 'المؤخر', 'الأول', 'الآخر', 'الظاهر', 'الباطن', 'الوالي', 'المتعالي', 'البر', 'التواب', 'المنتقم', 'العفو', 'الرءوف', 'مالك الملك', 'ذو الجلال والإكرام', 'المقسط', 'الجامع', 'الغني', 'المغني', 'المانع', 'الضار', 'النافع', 'النور', 'الهادي', 'البديع', 'الباقي', 'الوارث', 'الرشيد', 'الصبور'
];

const ARTICLES_DATA = [
    { title: 'التدبر: كيف نفتح قلوبنا للقرآن؟', content: 'التدبر ليس علمًا معقدًا، بل هو حالة قلب. يبدأ بأن تفرّغ نفسك من شواغل الدنيا وتجلس بين يدي كلام ربك سائلاً الهداية... \n\n### خطوات بسيطة للبدء:\n1. اختر وقتًا هادئًا.\n2. اقرأ الآية ببطء وتكرار.\n3. اسأل نفسك: ما الرسالة التي يريدها الله مني في هذه الآية؟'},
];

const MORE_MENU_ITEMS = [
    { id: 'prayer-tracker-screen', icon: 'fa-check-square', title: 'متتبع الصلاة' },
    { id: 'qibla-screen', icon: 'fa-compass', title: 'القبلة' },
    { id: 'tasbeeh-screen', icon: 'fa-hand-dots', title: 'التسبيح' },
    { id: 'asma-screen', icon: 'fa-gem', title: 'أسماء الله الحسنى' },
    { id: 'articles-screen', icon: 'fa-pen-nib', title: 'مقالات عبد الله بن عبد الله' },
    { id: 'about-screen', icon: 'fa-info-circle', title: 'عن التطبيق' },
    { id: 'secret-mode-toggle', icon: 'fa-user-secret', title: 'الوضع السري' },
];


class HablullahApp {
    private activeScreen: HTMLElement;
    private isSecretMode: boolean = false;
    
    constructor() {
        this.activeScreen = document.getElementById('home-screen')!;
        this.bindEventListeners();
        this.populateContent();
    }

    private bindEventListeners() {
        const startBtn = document.getElementById('start-journey-btn');
        startBtn?.addEventListener('click', () => this.initApp());

        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNavClick(e.currentTarget as HTMLButtonElement));
        });
        
        const moreMenuList = document.getElementById('more-menu-list');
        moreMenuList?.addEventListener('click', (e) => this.handleMoreMenuClick(e));

        const backToSurahListBtn = document.getElementById('back-to-surah-list');
        backToSurahListBtn?.addEventListener('click', () => this.showSurahList());

        const tasbeehIncrementBtn = document.getElementById('tasbeeh-increment-btn');
        const tasbeehResetBtn = document.getElementById('tasbeeh-reset-btn');
        tasbeehIncrementBtn?.addEventListener('click', () => this.incrementTasbeeh());
        tasbeehResetBtn?.addEventListener('click', () => this.resetTasbeeh());
        
        const closePlayerBtn = document.getElementById('close-player-btn');
        closePlayerBtn?.addEventListener('click', () => this.hideAudioPlayer());
    }

    private initApp() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const appContainer = document.getElementById('app-container');
        welcomeScreen?.classList.add('hidden');
        appContainer?.classList.remove('hidden');
    }
    
    private handleNavClick(button: HTMLButtonElement) {
        const targetId = button.dataset.target;
        if (!targetId) return;

        this.navigateTo(targetId);
        
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    private handleMoreMenuClick(e: Event) {
        const target = e.target as HTMLElement;
        const menuItem = target.closest('.more-menu-item');
        if (!menuItem) return;
        
        const targetId = (menuItem as HTMLElement).dataset.target;
        if (targetId === 'secret-mode-toggle') {
            this.toggleSecretMode();
        } else if (targetId) {
            this.navigateTo(targetId, menuItem.textContent?.trim() || ' ');
             // Keep the 'More' button active
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.nav-btn[data-target="more-screen"]')?.classList.add('active');
        }
    }

    private navigateTo(screenId: string, title?: string) {
        const screenTitle = document.getElementById('screen-title');
        const targetScreen = document.getElementById(screenId);
        
        if (!targetScreen || !screenTitle) return;

        this.activeScreen.classList.remove('active');
        targetScreen.classList.add('active');
        this.activeScreen = targetScreen;

        if (title) {
             screenTitle.textContent = title;
        } else {
             const navButton = document.querySelector(`.nav-btn[data-target="${screenId}"]`);
             screenTitle.textContent = navButton?.getAttribute('title') || 'حبل الله';
        }
        
        if (screenId === 'home-screen') {
            const homeNavButton = document.querySelector(`.nav-btn[data-target="home-screen"]`);
            screenTitle.textContent = homeNavButton?.getAttribute('title') || 'الرئيسية';
        }

        if (screenId !== 'quran-screen') {
           this.showSurahList(true);
        }
    }

    private populateContent() {
        this.renderQuranSurahs();
        this.renderHadith();
        this.renderDua();
        this.renderMoreMenu();
        this.renderPrayerTracker();
        this.renderAsmaUlHusna();
        this.renderArticles();
    }
    
    private renderQuranSurahs() {
        const surahListContainer = document.getElementById('surah-list');
        if (!surahListContainer) return;
        
        surahListContainer.innerHTML = '';
        QURAN_DATA.forEach(surah => {
            const surahEl = document.createElement('div');
            surahEl.className = 'surah-item card';
            surahEl.innerHTML = `
                <div class="surah-info">
                    <div class="surah-number">${surah.number}</div>
                    <div>
                        <div class="surah-name">${surah.name}</div>
                        <small class="surah-details">${surah.revelationType} - ${surah.numberOfAyahs} آيات</small>
                    </div>
                </div>
                <i class="fas fa-chevron-left"></i>
            `;
            surahEl.addEventListener('click', () => this.showAyahView(surah));
            surahListContainer.appendChild(surahEl);
        });
    }
    
    private showAyahView(surah: typeof QURAN_DATA[0]) {
        if (!surah) return;
        
        const surahList = document.getElementById('surah-list');
        const ayahView = document.getElementById('ayah-view');
        const ayahListContainer = document.getElementById('ayah-list');
        const surahTitle = document.getElementById('ayah-view-surah-title');

        if(!surahList || !ayahView || !ayahListContainer || !surahTitle) return;

        surahList.classList.add('hidden');
        ayahView.classList.remove('hidden');
        
        surahTitle.textContent = `سورة ${surah.name}`;
        ayahListContainer.innerHTML = '';

        surah.ayahs.forEach(ayah => {
            const ayahEl = document.createElement('div');
            ayahEl.className = 'ayah-item card';
            ayahEl.innerHTML = `
                <div class="ayah-text">${ayah.text} (${ayah.number})</div>
                <div class="ayah-controls">
                     <button class="tadabbur-btn" title="تدبر"><i class="fas fa-lightbulb"></i></button>
                     <button class="play-audio-btn" title="استماع"><i class="fas fa-play"></i></button>
                     <button class="share-btn" title="مشاركة"><i class="fas fa-share-alt"></i></button>
                </div>
            `;
            
            ayahEl.querySelector('.play-audio-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                this.playAudio(ayah.audio, `سورة ${surah.name} - آية ${ayah.number}`);
            });

            ayahEl.querySelector('.tadabbur-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                let tadabburEl = ayahEl.querySelector('.tadabbur-text');
                if (tadabburEl) {
                    tadabburEl.remove();
                } else {
                    tadabburEl = document.createElement('p');
                    tadabburEl.className = 'tadabbur-text';
                    tadabburEl.textContent = `تدبر: ${ayah.tadabbur}`;
                    ayahEl.appendChild(tadabburEl);
                }
            });
            
             ayahEl.querySelector('.share-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                this.shareTadabbur(ayah, surah);
            });

            ayahListContainer.appendChild(ayahEl);
        });
    }

    private showSurahList(force = false) {
        const surahList = document.getElementById('surah-list');
        const ayahView = document.getElementById('ayah-view');
        if(force || !ayahView?.classList.contains('hidden')){
            surahList?.classList.remove('hidden');
            ayahView?.classList.add('hidden');
        }
    }

    private renderHadith() {
        const container = document.getElementById('hadith-screen');
        if (!container) return;
        container.innerHTML = '<h1>الأحاديث النبوية</h1>';
        HADITH_DATA.forEach(hadith => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${hadith.title}</h2>
                <p>"${hadith.text}"</p>
                <p class="signature">${hadith.source}</p>
            `;
            container.appendChild(card);
        });
    }
    
    private renderDua() {
        const container = document.getElementById('dua-screen');
        if (!container) return;
        container.innerHTML = '';
        const categories = [...new Set(DUA_DATA.map(d => d.category))];
        categories.forEach(category => {
            const categoryEl = document.createElement('div');
            categoryEl.innerHTML = `<h2>${category}</h2>`;
            container.appendChild(categoryEl);
            DUA_DATA.filter(d => d.category === category).forEach(dua => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<p>${dua.text}</p>`;
                container.appendChild(card);
            });
        });
    }

    private renderMoreMenu() {
        const container = document.getElementById('more-menu-list');
        if (!container) return;
        container.innerHTML = '';
        MORE_MENU_ITEMS.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'more-menu-item';
            menuItem.dataset.target = item.id;
            menuItem.innerHTML = `
                <div>
                    <i class="fas ${item.icon}"></i>
                    <span>${item.title}</span>
                </div>
                <i class="fas fa-chevron-left"></i>
            `;
            container.appendChild(menuItem);
        });
    }
    
    private renderPrayerTracker() {
        const container = document.getElementById('prayer-tracker-list');
        if (!container) return;
        container.innerHTML = '';
        PRAYERS.forEach(prayer => {
            const item = document.createElement('div');
            item.className = 'prayer-item';
            item.innerHTML = `
                <label for="prayer-${prayer}">${prayer}</label>
                <input type="checkbox" id="prayer-${prayer}" name="prayer-${prayer}">
            `;
            container.appendChild(item);
        });
    }
    
    private renderAsmaUlHusna() {
        const container = document.getElementById('asma-ul-husna-grid');
        if (!container) return;
        container.innerHTML = '';
        ASMA_UL_HUSNA.forEach(name => {
            const item = document.createElement('div');
            item.className = 'asma-item';
            item.textContent = name;
            container.appendChild(item);
        });
    }
    
    private renderArticles() {
        const container = document.getElementById('articles-screen');
        if (!container) return;
        container.innerHTML = '<h1>مقالات عبد الله بن عبد الله</h1>';
        ARTICLES_DATA.forEach(article => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${article.title}</h2>
                <div>${marked.parse(article.content)}</div>
            `;
            container.appendChild(card);
        });
    }
    
    private incrementTasbeeh() {
        const display = document.getElementById('tasbeeh-display');
        if (!display) return;
        let count = parseInt(display.textContent || '0');
        count++;
        display.textContent = count.toString();
    }
    
    private resetTasbeeh() {
        const display = document.getElementById('tasbeeh-display');
        if (display) {
            display.textContent = '0';
        }
    }
    
    private playAudio(src: string, title: string) {
        const playerContainer = document.getElementById('audio-player-container');
        const player = document.getElementById('audio-player') as HTMLAudioElement;
        const playerTitle = document.getElementById('player-title');

        if(!playerContainer || !player || !playerTitle) return;

        playerTitle.textContent = title;
        // player.src = src; 
        // player.play();
        
        playerContainer.classList.remove('hidden');
        alert(`تشغيل الصوت: ${title}\nالمصدر: ${src} (محتوى تجريبي)`);
    }

    private hideAudioPlayer() {
        const playerContainer = document.getElementById('audio-player-container');
        const player = document.getElementById('audio-player') as HTMLAudioElement;
        player?.pause();
        playerContainer?.classList.add('hidden');
    }

    private async shareTadabbur(ayah: any, surah: any) {
        const shareData = {
            title: `تدبر من سورة ${surah.name}`,
            text: `﴿${ayah.text}﴾\n\n✨ تدبر:\n${ayah.tadabbur}\n\n-- عبر تطبيق حبل الله`,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert('المشاركة غير مدعومة على هذا المتصفح.');
            }
        } catch (err) {
            console.error('Error sharing tadabbur:', err);
        }
    }
    
    private toggleSecretMode() {
        this.isSecretMode = !this.isSecretMode;
        document.body.classList.toggle('secret-mode', this.isSecretMode);
        
        const toggleButton = document.querySelector('.more-menu-item[data-target="secret-mode-toggle"] span');
        if (toggleButton) {
            toggleButton.textContent = this.isSecretMode ? 'إلغاء الوضع السري' : 'الوضع السري';
        }
        
        // Reset to home screen to avoid confusion
        this.handleNavClick(document.querySelector('.nav-btn[data-target="home-screen"]')!);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HablullahApp();
});