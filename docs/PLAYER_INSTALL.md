# Установка Nuclear Tech: Second Dawn 0.1.0-alpha.6

**Публичная альфа · Minecraft 1.20.1 · Forge 47.4.28 · Java 17**

NTSD — сборка Minecraft и оригинальные вспомогательные модули, которые разрабатывает и поддерживает **BySally**. Minecraft и сторонние моды принадлежат их соответствующим авторам.

## 1. Клиент / Client

**[Скачать клиентский ZIP · Download client](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-client.zip)** — 122,35 МБ.

1. Установи **CurseForge App** и войди в Minecraft Java Edition в штатном лаунчере.
2. Открой **Minecraft → My Modpacks → Import** в CurseForge App.
3. Выбери скачанный ZIP **целиком, без предварительной распаковки**. Не клади его вручную в папку `mods`.
4. Если CurseForge App спросит о составе ZIP, выбери **All Files**: так сохранятся квесты, конфигурации и компоненты NTSD.
5. Дождись скачивания **118 файлов модов** с официальных источников, затем запускай профиль через приложение.
6. Выдели около **6–8 ГБ ОЗУ** для Minecraft (оставь память для Windows и других программ).

Это **не автономный архив со всеми JAR**: CurseForge App скачивает сторонние моды при импорте. Сборка проверена на Windows.

## 2. Сервер / Dedicated server

**[Скачать серверный ZIP · Download server](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-server.zip)** — 8,66 МБ.

Серверный ZIP содержит установщик, а не полный автономный сервер.

- Требуются **Java 17**, **Python 3.10+**, подключение к интернету и клиентский профиль **именно 0.1.0-alpha.6**, установленный через CurseForge App.
- Распакуй серверный ZIP в **отдельную папку**. Следуй инструкциям в **[INSTALL_RU.md](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/INSTALL_RU.md)** или **[INSTALL_EN.md](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/INSTALL_EN.md)** для Windows/Linux.
- Minecraft EULA должен принять владелец сервера; установщик не делает это автоматически.
- Подключайся к запущенному серверу через обычный **список серверов**. Quick Play в локальной проверке дал тайм-аут.

Внешняя доступность сервера через интернет и нативная установка на Linux не подтверждены тестами alpha.6.

## 3. Важно перед игрой

- Это **pre-release**, не окончательный перенос NTNH: **30 квестов пока недоступны** напрямую либо из-за зависимостей.
- Старые миры Minecraft **1.7.10 нельзя переносить напрямую**. Перед обновлением сохранения сделай резервную копию и проверяй обновление на копии.
- [Известные проблемы](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/KNOWN_ISSUES.md) · [Сообщить об ошибке](https://github.com/BySally/NTSD/issues/new/choose) · [Страница выпуска](https://github.com/BySally/NTSD/releases/tag/0.1.0-alpha.6)
- Исходники собственных модулей: [Core](https://github.com/BySally/NTSD-Core) · [Early Loading](https://github.com/BySally/NTSD-Early-Loading) · [Menu Background](https://github.com/BySally/NTSD-Menu-Background). Условия сторонних компонентов и исходники версии Core CF4 приведены в материалах релиза.

---

# Installing Nuclear Tech: Second Dawn 0.1.0-alpha.6

**Public alpha · Minecraft 1.20.1 · Forge 47.4.28 · Java 17**

NTSD is a Minecraft modpack and original support modules developed and maintained by **BySally**. Minecraft and the included third-party mods belong to their respective creators.

## Client

**[Download client ZIP](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-client.zip)** — 122.35 MB.

1. Install **CurseForge App** and make sure you have Minecraft Java Edition.
2. Open **Minecraft → My Modpacks → Import**.
3. Select the **unextracted ZIP**. Do not place it in the `mods` folder.
4. Select **All Files** if prompted, so the pack's quests, configurations and own modules are installed.
5. Let the App download the **118 official mod files**.
6. Allocate around **6–8 GB RAM** while leaving enough memory for your operating system.

The ZIP is **not a self-contained offline collection of JARs**. Tested client platform: Windows.

## Dedicated server

**[Download server ZIP](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-server.zip)** — 8.66 MB.

This is a bootstrap installer rather than a fully populated server folder. You need **Java 17**, **Python 3.10+**, internet access and an already installed **matching client profile**.

Extract it to a separate directory and follow the complete [English installation guide](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/INSTALL_EN.md). The server owner must accept the Minecraft EULA. Connect using the normal multiplayer server list, not Quick Play.

Public network accessibility and native Linux runtime were not covered by the alpha.6 tests.

## Limitations and support

- **30 quests** remain blocked directly or through dependencies.
- Direct conversion of Minecraft **1.7.10 worlds is unsupported**. Back up saves and test upgrades on copies.
- [Known issues](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/KNOWN_ISSUES.md) · [Report a bug](https://github.com/BySally/NTSD/issues/new/choose) · [Full release notes](https://github.com/BySally/NTSD/releases/tag/0.1.0-alpha.6)

**BySally develops the NTSD modpack and its own support components, not Minecraft or the third-party mods.**
