import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"



const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

   return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="Logo logo-light" src="/files/logo-light.png" />
        <img class="Logo logo-dark" src="/files/logo-dark.png" />
      </a>
      {/*<a href={baseDir}>{title}</a>*/} {/*RESTORE THIS LINE TO GET THE PAGE TITLE BACK JON*/}
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.Logo {
  width: 40%;
  display: block;
}

.logo-dark {
  display: none;
}

:root[saved-theme="dark"] .logo-light {
  display: none;
}

:root[saved-theme="dark"] .logo-dark {
  display: block;
}

@media (max-width: 800px) {
  .Logo {
    width: 20%;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
