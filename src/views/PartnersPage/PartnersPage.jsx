import React from "react";
import clsx from "clsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Title } from "@common";

import styles from "./PartnersPage.module.scss";
import netnut from "@images/partners/01.png"
import dolphine from "@images/partners/02.png"
import toxic from "@images/partners/03.png"
import lteboost from "@images/partners/04.png"

const PartnersPage = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const nextTabHandler = () => {
    if (tabIndex >= 3) {
      setTabIndex(0)
      return;
    }
    setTabIndex((prev) => prev + 1);
  };

  const onChangeSelect = (index) => {
    setTabIndex(index)
  };

  return (
    <section className={styles.partners}>
      <div className={clsx(styles.partners__container, "container")}>
        <div className={styles.partners__body}>
          <Title text={"Наши партнеры"} classes={styles.partners__title} />
          <Tabs
            selectedIndex={tabIndex}
            onSelect={onChangeSelect}
            className={clsx(styles.partners__tabs, styles.partnersTabs)}
          >
            <div className={styles.partnersTabs__actions}>
              <TabList className={styles.partnersTabs__list}>
                <Tab
                  data-tab={0}
                  className={styles.partnersTabs__item}
                  selectedClassName={styles.partnersTabs__item_active}
                >
                  <div className={styles.partnersTabs__itemImage}>
                    <img src={netnut} alt="Логотип Netnut" />
                  </div>
                </Tab>
                <Tab data-tab={1} className={styles.partnersTabs__item} selectedClassName={styles.partnersTabs__item_active}>
                  <div className={styles.partnersTabs__itemImage}>
                    <img src={dolphine} alt="Логотип Dolphine-anty" />
                  </div>
                </Tab>
                <Tab data-tab={2} className={styles.partnersTabs__item} selectedClassName={styles.partnersTabs__item_active}>
                  <div className={styles.partnersTabs__itemImage}>
                    <img src={toxic} alt="Логотип канала Toxic Shop" />
                  </div>
                </Tab>
                <Tab data-tab={3} className={styles.partnersTabs__item} selectedClassName={styles.partnersTabs__item_active}>
                  <div className={styles.partnersTabs__itemImage}>
                    <img src={lteboost} alt="Логотип 4G LTEBOOST" />
                  </div>
                </Tab>
              </TabList>
              <button onClick={nextTabHandler} type="button" className={styles.partnersTabs__next}>
                <span className="_icon-right-arrow-angle"></span>
              </button>
            </div>
            <div className={styles.partnersTabs__content}>
              <TabPanel className={clsx(styles.partnersTabs__tabItem, styles.tabItem)}>
                <h4 className={styles.tabItem__title}>Any content 1</h4>
                <div className={styles.tabItem__text}>
                  <p>Привет!</p>
                  <p>Хочу представить твоему вниманию незаюзанный прокси сервис <a href="https://netnut.io/" target="_blank" rel="noreferrer">https://netnut.io/</a></p>
                  <p>Резидентские прокси (статические и с ротацией), серверные прокси</p>
                  <p>Отлично подходят под регистрацию/фарм/залив аккаунтов Facebook</p>
                  <p>Сами мы их оттестировали на массе и убедились в их работоспособности на протяжении последнего месяца (взяли терабайт и отъюзали его)!</p>
                  <p>Переходя на их сайт по моим ссылкам ты уверенно получаешь 20% скидки на покупку, а так же можете запросить тестовый пакет прокси чтобы самим убедиться в их работоспособности!</p>
                  <p>Есть софт для генерации проксей</p>
                  <p>Остались вопросы, пиши в саппорт - @SocroboticHelp_bot</p>
                  <p>Если возникнут сложности с регистрацией или еще с чем, то можно писать их саппорту - @ntntchen (Скажите что от Дениса Макарова)</p>
                </div>
                <div className={styles.tabItem__footer}>
                  <h4 className={clsx(styles.tabItem__title, styles.tabItem__title_top)}>Сайт Партнера</h4>
                  <a href="https://netnut.io/" target="_blank" className={clsx(styles.tabItem__link, "button button_blue")} rel="noreferrer">https://netnut.io/</a>
                </div>
              </TabPanel>
              <TabPanel className={clsx(styles.partnersTabs__tabItem, styles.tabItem)}>
                <h4 className={styles.tabItem__title}>Антидетект браузер для задач арбитража трафика</h4>
                <div className={styles.tabItem__text}></div>
                <div className={styles.tabItem__footer}>
                  <h4 className={clsx(styles.tabItem__title, styles.tabItem__title_top)}>Сайт Партнера</h4>
                  <a href="https://anty.dolphin.ru.com/a/28798" target="_blank" className={clsx(styles.tabItem__link, "button button_blue")} rel="noreferrer">https://anty.dolphin.ru.com/a/28798</a>
                </div>
              </TabPanel>
              <TabPanel className={clsx(styles.partnersTabs__tabItem, styles.tabItem)}>
                <h4 className={styles.tabItem__title}>Toxickings.shop</h4>
                <div className={styles.tabItem__text}>
                  <p>TOXIC KINGS SHOP @ToxicKingsShop_bot - это один из лучших магазинов по качественным расходникам для Facebook и Google! 🔥</p>
                  <p>🔥 Они команда специалистов своего дела, которая выполняет свою работу качественно, что подтверждено отзывами.🔥</p>
                  <p>✅ У них магазин предоставляет качественные расходники для Facebook | Google, которые служат долго и надежно.</p>
                  <p>✅ У них огромный ассортимент товаров, который с каждым днём увеличивается! 🔥</p>
                  <p>✅ Отзывчивая техническая поддержка которая всегда пойдёт к вам на встречу! 🔥</p>
                  <p>✅ Они всегда готовы к сотрудничеству на постоянной основе в качестве поставщика оптом для арбитражных команд и не только…😈</p>
                  <p>✅ У них одни из лучших цен на рынке! 🔥</p>
                  <p>Вот ссылки для удобства:</p>
                  <p>@ToxicKingsShop_bot - Купить тут|БОТ Магазин ☑️</p>
                  <p>ToxicKings.shop - Купить тут|Сайт Магазин ☑️</p>
                  <p>@ToxicKingsSupport_bot - Помощь поддержка если спам ☑️</p>
                  <p>@ToxicKings_Support - Менеджер магазина | Саппорт☑️</p>
                  <p>@ToxicKings_team - Канал команды ☑️</p>
                  <p>@ToxicKings_chat - Чат где вам помогут, другие арбитражники с заливами и лайфхаками ☑️</p>
                </div>
                <div className={styles.tabItem__footer}>
                  <h4 className={clsx(styles.tabItem__title, styles.tabItem__title_top)}>Сайт Партнера</h4>
                  <a href="http://toxickings.shop/" target="_blank" className={clsx(styles.tabItem__link, "button button_blue")} rel="noreferrer">http://toxickings.shop/</a>
                </div>
              </TabPanel>
              <TabPanel className={clsx(styles.partnersTabs__tabItem, styles.tabItem)}>
                <h4 className={styles.tabItem__title}>lteboost.com</h4>
                <div className={styles.tabItem__text}>
                  <p>Мобильные прокси для вашего бизнеса!</p>
                  <p>Стабильная работа на протяжении 6 лет!</p>
                </div>
                <div className={styles.tabItem__footer}>
                  <h4 className={clsx(styles.tabItem__title, styles.tabItem__title_top)}>Сайт Партнера</h4>
                  <a href="https://lteboost.com/?refferal=6c2869" target="_blank" className={clsx(styles.tabItem__link, "button button_blue")} rel="noreferrer">https://lteboost.com/</a>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section >
  )
}

export default PartnersPage;