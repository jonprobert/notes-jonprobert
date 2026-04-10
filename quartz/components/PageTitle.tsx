import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"



const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  const lightLogo = "/files/logo-light.png"
  const darkLogo = "/files/logo-dark.png"

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img
          class="Logo"
          src={lightLogo}
          alt={title}
          style="width: 50%; display: block;"
          data-light-logo
        />
        <img
          class="Logo"
          src={darkLogo}
          alt={title}
          style="width: 50%; display: none;"
          data-dark-logo
        />
      </a>
      {/*<a href={baseDir}>{title}</a>*/} {/*RESTORE THIS LINE TO GET THE PAGE TITLE BACK JON*/}

      <script dangerouslySetInnerHTML={{ __html: `
        const root = document.documentElement;
        const light = document.querySelector('[data-light-logo]');
        const dark = document.querySelector('[data-dark-logo]');

        const update = () => {
          const isDark = root.getAttribute('saved-theme') === 'dark';
          light.style.display = isDark ? 'none' : 'block';
          dark.style.display = isDark ? 'block' : 'none';
        };

        update();

        new MutationObserver(update).observe(root, {
          attributes: true,
          attributeFilter: ['saved-theme']
        });
      `}} />
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
