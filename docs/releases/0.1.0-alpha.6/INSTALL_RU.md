# Установка Nuclear Tech: Second Dawn 0.1.0-alpha.6

**Minecraft 1.20.1 · Forge 47.4.28 · Java 17**

## Клиент Native (CF5)

1. Установите Minecraft Java Edition 1.20.1 и [Forge 47.4.28](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html). Для профиля выберите Java 17.
2. Создайте отдельный игровой каталог. Распакуйте [NTSD-0.1.0-alpha.6-Native.zip](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-Native.zip) прямо в него, чтобы папки `mods/` и `config/` оказались в корне.
3. Выделите около 6–8 ГБ ОЗУ и запустите профиль Forge. Все 122 мода уже внутри. Для игры на сервере CF5 используйте этот клиент.

Книга квестов открывается клавишей обратного апострофа слева от 1 на английской раскладке. Сохраняйте закреплённые версии модов.

## Клиент для CurseForge App (CF4)

Импортируйте [существующий CurseForge ZIP](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-CurseForge.zip) без распаковки. Если приложение спросит, выберите **All Files**. В этом архиве используется предыдущий Core CF4.

## Выделенный сервер (CF5)

**Хостинг.** Установите Forge 47.4.28 для Minecraft 1.20.1, загрузите содержимое [Server Pack](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-Server.zip) в корневую папку сервера и запустите Forge с Java 17.

**Локальный сервер.**

1. Установите [Forge Server 47.4.28](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html) в отдельную папку. В официальном установщике выберите **Install server**.
2. Распакуйте Server Pack в ту же папку. Архив содержит все 93 серверных мода, конфигурации и игровые данные.
3. Запустите созданный Forge файл `run.bat` на Windows или `sh run.sh` на Linux. Прочтите [Minecraft EULA](https://aka.ms/MinecraftEULA). Если согласны, самостоятельно укажите `eula=true` в созданном файле и запустите сервер снова.
4. Подключитесь через «Сетевая игра» из клиента Native на CF5. Перед обновлением остановите сервер командой `stop` и дождитесь сохранения.

Проверены запуск на Windows, локальное подключение клиента и загрузка сохранённого мира после перезапуска. Запуск Linux и доступ через интернет в эту проверку не входили.

## Обновление без потери сохранений

Остановите игру или сервер и сохраните копию всего профиля, включая мир и его конфигурации. Проверьте обновление на копии мира. Прямой перенос миров Minecraft 1.7.10 не поддерживается. Руды в уже созданных чанках сохраняются.

[SHA-256](SHA256SUMS.txt) · [Known issues](KNOWN_ISSUES.md) · [GitHub Issues](https://github.com/BySally/NTSD/issues)
