/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  fragment ImageFragment on Image {\n    src: url\n    width\n    height\n    alt\n  }\n":
      TadaDocumentNode<{ alt: string | null; height: number; width: number; src: string; }, {}, { fragment: "ImageFragment"; on: "Image"; masked: true; }>;
    "\n    fragment MediaImageFragment on MediaImage {\n      id\n      mediaImage {\n        ...ImageFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ mediaImage: { [$tada.fragmentRefs]: { ImageFragment: "Image"; }; }; id: string; }, {}, { fragment: "MediaImageFragment"; on: "MediaImage"; masked: true; }>;
    "\n    fragment UserFragment on User {\n      id\n      name\n      picture {\n        ... on MediaImage {\n          ...MediaImageFragment\n        }\n      }\n    }\n  ":
      TadaDocumentNode<{ picture: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; } | null; name: string; id: string; }, {}, { fragment: "UserFragment"; on: "User"; masked: true; }>;
    "\n  fragment LinkFragment on Link {\n    href: url\n    text: title\n    internal\n  }\n":
      TadaDocumentNode<{ internal: boolean; text: string | null; href: string | null; }, {}, { fragment: "LinkFragment"; on: "Link"; masked: true; }>;
    "\n  fragment TextFragment on Text {\n    format\n    value\n    processed\n  }\n":
      TadaDocumentNode<{ processed: unknown; value: string | null; format: string | null; }, {}, { fragment: "TextFragment"; on: "Text"; masked: true; }>;
    "\n    fragment NodeArticleTeaserFragment on NodeArticle {\n      __typename\n      id\n      title\n      summary\n      path\n      image {\n        ...MediaImageFragment\n      }\n      author {\n        ...UserFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ author: { [$tada.fragmentRefs]: { UserFragment: "User"; }; } | null; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; path: string; summary: string; title: string; id: string; __typename: "NodeArticle"; }, {}, { fragment: "NodeArticleTeaserFragment"; on: "NodeArticle"; masked: true; }>;
    "\n  fragment ParagraphWebformFragment on ParagraphWebform {\n    __typename\n    id\n    heading\n    subheadingOptional: subheading\n    descriptionOptional: description\n    form\n  }\n":
      TadaDocumentNode<{ form: string; descriptionOptional: string | null; subheadingOptional: string | null; heading: string; id: string; __typename: "ParagraphWebform"; }, {}, { fragment: "ParagraphWebformFragment"; on: "ParagraphWebform"; masked: true; }>;
    "\n    fragment ViewBlogTeaserResultFragment on ViewBlogTeaserResult {\n      __typename\n      id\n      view\n      display\n      results {\n        ...NodeArticleTeaserFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ results: ({ __typename?: "NodeArticle" | undefined; [$tada.fragmentRefs]: { NodeArticleTeaserFragment: "NodeArticle"; }; } | { __typename?: "NodePage" | undefined; })[]; display: string; view: string; id: string; __typename: "ViewBlogTeaserResult"; }, {}, { fragment: "ViewBlogTeaserResultFragment"; on: "ViewBlogTeaserResult"; masked: true; }>;
    "\n    fragment ViewBlogTeaserFeaturedResultFragment on ViewBlogTeaserFeaturedResult {\n      __typename\n      id\n      view\n      display\n      results {\n        ...NodeArticleTeaserFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ results: ({ __typename?: "NodeArticle" | undefined; [$tada.fragmentRefs]: { NodeArticleTeaserFragment: "NodeArticle"; }; } | { __typename?: "NodePage" | undefined; })[]; display: string; view: string; id: string; __typename: "ViewBlogTeaserFeaturedResult"; }, {}, { fragment: "ViewBlogTeaserFeaturedResultFragment"; on: "ViewBlogTeaserFeaturedResult"; masked: true; }>;
    "\n    fragment ParagraphViewReference on ParagraphViewReference {\n      __typename\n      id\n      headingOptional: heading\n      subheadingOptional: subheading\n      descriptionOptional: description\n      actionOptional: link {\n        ...LinkFragment\n      }\n      reference {\n        __typename\n        ...ViewBlogTeaserResultFragment\n        ...ViewBlogTeaserFeaturedResultFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ reference: { __typename: "ViewBlogTeaserResult"; [$tada.fragmentRefs]: { ViewBlogTeaserResultFragment: "ViewBlogTeaserResult"; }; } | { __typename: "ViewBlogTeaserFeaturedResult"; [$tada.fragmentRefs]: { ViewBlogTeaserFeaturedResultFragment: "ViewBlogTeaserFeaturedResult"; }; }; actionOptional: { [$tada.fragmentRefs]: { LinkFragment: "Undefined Fragment"; }; } | null; descriptionOptional: string | null; subheadingOptional: string | null; headingOptional: string | null; id: string; __typename: "ParagraphViewReference"; }, {}, { fragment: "ParagraphViewReference"; on: "ParagraphViewReference"; masked: true; }>;
    "\n    fragment ParagraphHeroFragment on ParagraphHero {\n      __typename\n      id\n      heading\n      description\n      image {\n        ... on MediaImage {\n          ...MediaImageFragment\n        }\n      }\n      actions {\n        ...LinkFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ actions: { [$tada.fragmentRefs]: { LinkFragment: "Link"; }; }[] | null; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; description: string; heading: string; id: string; __typename: "ParagraphHero"; }, {}, { fragment: "ParagraphHeroFragment"; on: "ParagraphHero"; masked: true; }>;
    "\n    fragment ParagraphSimpleCardFragment on ParagraphSimpleCard {\n      __typename\n      id\n      heading\n      description\n      image {\n        ...MediaImageFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; description: string; heading: string; id: string; __typename: "ParagraphSimpleCard"; }, {}, { fragment: "ParagraphSimpleCardFragment"; on: "ParagraphSimpleCard"; masked: true; }>;
    "\n    fragment ParagraphCardGroupFragment on ParagraphCardGroup {\n      __typename\n      id\n      heading\n      subheadingOptional: subheading\n      descriptionOptional: description\n      items {\n        __typename\n        ...ParagraphSimpleCardFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ items: ({ __typename: "ParagraphAuthor"; } | { __typename: "ParagraphCardGroup"; } | { __typename: "ParagraphCta"; } | { __typename: "ParagraphFaq"; } | { __typename: "ParagraphHero"; } | { __typename: "ParagraphLogoGroup"; } | { __typename: "ParagraphTestimonial"; } | { __typename: "ParagraphViewReference"; } | { __typename: "ParagraphWebform"; } | { __typename: "ParagraphLogo"; } | { __typename: "ParagraphQuestion"; } | { __typename: "ParagraphSimpleCard"; [$tada.fragmentRefs]: { ParagraphSimpleCardFragment: "ParagraphSimpleCard"; }; })[]; descriptionOptional: string | null; subheadingOptional: string | null; heading: string; id: string; __typename: "ParagraphCardGroup"; }, {}, { fragment: "ParagraphCardGroupFragment"; on: "ParagraphCardGroup"; masked: true; }>;
    "\n    fragment ParagraphCtaFragment on ParagraphCta {\n      __typename\n      id\n      heading\n      description\n      subheading\n      actions {\n        ...LinkFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ actions: { [$tada.fragmentRefs]: { LinkFragment: "Link"; }; }[] | null; subheading: string | null; description: string; heading: string; id: string; __typename: "ParagraphCta"; }, {}, { fragment: "ParagraphCtaFragment"; on: "ParagraphCta"; masked: true; }>;
    "\n  fragment ParagraphQuestionFragment on ParagraphQuestion {\n    __typename\n    id\n    question\n    answer {\n      processed\n    }\n  }\n":
      TadaDocumentNode<{ answer: { processed: unknown; }; question: string; id: string; __typename: "ParagraphQuestion"; }, {}, { fragment: "ParagraphQuestionFragment"; on: "ParagraphQuestion"; masked: true; }>;
    "\n    fragment ParagraphFaqFragment on ParagraphFaq {\n      __typename\n      id\n      heading\n      descriptionOptional: description\n      items {\n        __typename\n        ... on ParagraphQuestion {\n          ...ParagraphQuestionFragment\n        }\n      }\n    }\n  ":
      TadaDocumentNode<{ items: ({ __typename: "ParagraphAuthor"; } | { __typename: "ParagraphCardGroup"; } | { __typename: "ParagraphCta"; } | { __typename: "ParagraphFaq"; } | { __typename: "ParagraphHero"; } | { __typename: "ParagraphLogoGroup"; } | { __typename: "ParagraphTestimonial"; } | { __typename: "ParagraphViewReference"; } | { __typename: "ParagraphWebform"; } | { __typename: "ParagraphLogo"; } | { __typename: "ParagraphQuestion"; [$tada.fragmentRefs]: { ParagraphQuestionFragment: "ParagraphQuestion"; }; } | { __typename: "ParagraphSimpleCard"; })[]; descriptionOptional: string | null; heading: string; id: string; __typename: "ParagraphFaq"; }, {}, { fragment: "ParagraphFaqFragment"; on: "ParagraphFaq"; masked: true; }>;
    "\n    fragment ParagraphLogoFragment on ParagraphLogo {\n      __typename\n      id\n      image {\n        ...MediaImageFragment\n      }\n      link {\n        ...LinkFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ link: { [$tada.fragmentRefs]: { LinkFragment: "Link"; }; }; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; id: string; __typename: "ParagraphLogo"; }, {}, { fragment: "ParagraphLogoFragment"; on: "ParagraphLogo"; masked: true; }>;
    "\n    fragment ParagraphLogoGroupFragment on ParagraphLogoGroup {\n      __typename\n      id\n      heading\n      items {\n        ...ParagraphLogoFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ items: ({ __typename?: "ParagraphAuthor" | undefined; } | { __typename?: "ParagraphCardGroup" | undefined; } | { __typename?: "ParagraphCta" | undefined; } | { __typename?: "ParagraphFaq" | undefined; } | { __typename?: "ParagraphHero" | undefined; } | { __typename?: "ParagraphLogoGroup" | undefined; } | { __typename?: "ParagraphTestimonial" | undefined; } | { __typename?: "ParagraphViewReference" | undefined; } | { __typename?: "ParagraphWebform" | undefined; } | { __typename?: "ParagraphLogo" | undefined; [$tada.fragmentRefs]: { ParagraphLogoFragment: "ParagraphLogo"; }; } | { __typename?: "ParagraphQuestion" | undefined; } | { __typename?: "ParagraphSimpleCard" | undefined; })[]; heading: string; id: string; __typename: "ParagraphLogoGroup"; }, {}, { fragment: "ParagraphLogoGroupFragment"; on: "ParagraphLogoGroup"; masked: true; }>;
    "\n    fragment ParagraphAuthorFragment on ParagraphAuthor {\n      __typename\n      id\n      image {\n        ...MediaImageFragment\n      }\n      name\n      company\n      position\n    }\n  ":
      TadaDocumentNode<{ position: string; company: string; name: string; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; id: string; __typename: "ParagraphAuthor"; }, {}, { fragment: "ParagraphAuthorFragment"; on: "ParagraphAuthor"; masked: true; }>;
    "\n    fragment ParagraphTestimonialFragment on ParagraphTestimonial {\n      __typename\n      id\n      quote\n      author {\n        ...ParagraphAuthorFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ author: { __typename?: "ParagraphCardGroup" | undefined; } | { __typename?: "ParagraphCta" | undefined; } | { __typename?: "ParagraphFaq" | undefined; } | { __typename?: "ParagraphHero" | undefined; } | { __typename?: "ParagraphLogoGroup" | undefined; } | { __typename?: "ParagraphTestimonial" | undefined; } | { __typename?: "ParagraphViewReference" | undefined; } | { __typename?: "ParagraphWebform" | undefined; } | { __typename?: "ParagraphQuestion" | undefined; } | { __typename?: "ParagraphSimpleCard" | undefined; } | { __typename?: "ParagraphAuthor" | undefined; [$tada.fragmentRefs]: { ParagraphAuthorFragment: "ParagraphAuthor"; }; } | { __typename?: "ParagraphLogo" | undefined; }; quote: string; id: string; __typename: "ParagraphTestimonial"; }, {}, { fragment: "ParagraphTestimonialFragment"; on: "ParagraphTestimonial"; masked: true; }>;
    "\n    fragment ParagraphUnionFragment on ParagraphUnion {\n      ... on ParagraphInterface {\n        __typename\n        id\n      }\n      ...ParagraphHeroFragment\n      ...ParagraphCardGroupFragment\n      ...ParagraphWebformFragment\n      ...ParagraphViewReference\n      ...ParagraphCtaFragment\n      ...ParagraphFaqFragment\n      ...ParagraphLogoGroupFragment\n      ...ParagraphTestimonialFragment\n    }\n  ":
      TadaDocumentNode<{ id: string; __typename: "ParagraphAuthor"; } | { id: string; __typename: "ParagraphCardGroup"; [$tada.fragmentRefs]: { ParagraphCardGroupFragment: "ParagraphCardGroup"; }; } | { id: string; __typename: "ParagraphCta"; [$tada.fragmentRefs]: { ParagraphCtaFragment: "ParagraphCta"; }; } | { id: string; __typename: "ParagraphFaq"; [$tada.fragmentRefs]: { ParagraphFaqFragment: "ParagraphFaq"; }; } | { id: string; __typename: "ParagraphHero"; [$tada.fragmentRefs]: { ParagraphHeroFragment: "ParagraphHero"; }; } | { id: string; __typename: "ParagraphLogoGroup"; [$tada.fragmentRefs]: { ParagraphLogoGroupFragment: "ParagraphLogoGroup"; }; } | { id: string; __typename: "ParagraphTestimonial"; [$tada.fragmentRefs]: { ParagraphTestimonialFragment: "ParagraphTestimonial"; }; } | { id: string; __typename: "ParagraphViewReference"; [$tada.fragmentRefs]: { ParagraphViewReference: "ParagraphViewReference"; }; } | { id: string; __typename: "ParagraphWebform"; [$tada.fragmentRefs]: { ParagraphWebformFragment: "ParagraphWebform"; }; } | { id: string; __typename: "ParagraphLogo"; } | { id: string; __typename: "ParagraphQuestion"; } | { id: string; __typename: "ParagraphSimpleCard"; }, {}, { fragment: "ParagraphUnionFragment"; on: "ParagraphUnion"; masked: true; }>;
    "\n  fragment MetatagFragment on MetaTag @_unmask {\n    __typename\n    ... on MetaTagLink {\n      attributes {\n        rel\n        href\n      }\n    }\n    ... on MetaTagValue {\n      attributes {\n        name\n        content\n      }\n    }\n    ... on MetaTagProperty {\n      attributes {\n        property\n        content\n      }\n    }\n  }\n":
      TadaDocumentNode<{ attributes: { href: string | null; rel: string | null; }; __typename: "MetaTagLink"; } | { attributes: { content: string | null; property: string | null; }; __typename: "MetaTagProperty"; } | { __typename: "MetaTagScript"; } | { attributes: { content: string | null; name: string | null; }; __typename: "MetaTagValue"; }, {}, { fragment: "MetatagFragment"; on: "MetaTag"; masked: false; }>;
    "\n    fragment NodePageFragment on NodePage {\n      __typename\n      id\n      title\n      showTitle\n      summary\n      image {\n        ...MediaImageFragment\n      }\n      metatag {\n        ...MetatagFragment\n      }\n      components {\n        ...ParagraphUnionFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ components: ({ __typename?: "ParagraphAuthor" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphCardGroup" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphCta" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphFaq" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphHero" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphLogoGroup" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphTestimonial" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphViewReference" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphWebform" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphLogo" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphQuestion" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; } | { __typename?: "ParagraphSimpleCard" | undefined; [$tada.fragmentRefs]: { ParagraphUnionFragment: "ParagraphUnion"; }; })[] | null; metatag: ({ attributes: { href: string | null; rel: string | null; }; __typename: "MetaTagLink"; } | { attributes: { content: string | null; property: string | null; }; __typename: "MetaTagProperty"; } | { __typename: "MetaTagScript"; } | { attributes: { content: string | null; name: string | null; }; __typename: "MetaTagValue"; })[]; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; summary: string; showTitle: boolean | null; title: string; id: string; __typename: "NodePage"; }, {}, { fragment: "NodePageFragment"; on: "NodePage"; masked: true; }>;
    "\n    fragment NodeArticleFragment on NodeArticle {\n      __typename\n      id\n      title\n      summary\n      path\n      changed {\n        timestamp\n      }\n      image {\n        ...MediaImageFragment\n      }\n      author {\n        ...UserFragment\n      }\n      metatag {\n        ...MetatagFragment\n      }\n      body {\n        processed\n      }\n    }\n  ":
      TadaDocumentNode<{ body: { processed: unknown; }; metatag: ({ attributes: { href: string | null; rel: string | null; }; __typename: "MetaTagLink"; } | { attributes: { content: string | null; property: string | null; }; __typename: "MetaTagProperty"; } | { __typename: "MetaTagScript"; } | { attributes: { content: string | null; name: string | null; }; __typename: "MetaTagValue"; })[]; author: { [$tada.fragmentRefs]: { UserFragment: "User"; }; } | null; image: { __typename?: "MediaImage" | undefined; [$tada.fragmentRefs]: { MediaImageFragment: "MediaImage"; }; }; changed: { timestamp: unknown; }; path: string; summary: string; title: string; id: string; __typename: "NodeArticle"; }, {}, { fragment: "NodeArticleFragment"; on: "NodeArticle"; masked: true; }>;
    "\n  fragment TermTagsFragment on TermTags {\n    __typename\n    id\n    name\n    description {\n      processed\n    }\n  }\n":
      TadaDocumentNode<{ description: { processed: unknown; }; name: string; id: string; __typename: "TermTags"; }, {}, { fragment: "TermTagsFragment"; on: "TermTags"; masked: true; }>;
    "\n  fragment MenuItemFragment on MenuItem {\n    label: title\n    href: url\n    expanded\n  }\n":
      TadaDocumentNode<{ expanded: boolean; href: string | null; label: string; }, {}, { fragment: "MenuItemFragment"; on: "MenuItem"; masked: true; }>;
    "\n    fragment MenuFragment on Menu {\n      id\n      name\n      items {\n        ...MenuItemFragment\n      }\n    }\n  ":
      TadaDocumentNode<{ items: { [$tada.fragmentRefs]: { MenuItemFragment: "MenuItem"; }; }[]; name: string; id: string; }, {}, { fragment: "MenuFragment"; on: "Menu"; masked: true; }>;
    "\n      query route($path: String!) {\n        route(path: $path) {\n          __typename\n          ... on RouteInternal {\n            entity {\n              __typename\n              ...NodePageFragment\n              ...NodeArticleFragment\n              ...TermTagsFragment\n            }\n          }\n        }\n\n        menuMain: menu(name: MAIN) {\n          ...MenuFragment\n        }\n\n        menuFooter: menu(name: FOOTER) {\n          ...MenuFragment\n        }\n      }\n    ":
      TadaDocumentNode<{ route: { __typename: "RouteExternal"; } | { __typename: "RouteInternal"; entity: { __typename: "MediaImage"; } | { __typename: "NodeArticle"; [$tada.fragmentRefs]: { NodeArticleFragment: "NodeArticle"; }; } | { __typename: "NodePage"; [$tada.fragmentRefs]: { NodePageFragment: "NodePage"; }; } | { __typename: "TermTags"; [$tada.fragmentRefs]: { TermTagsFragment: "TermTags"; }; } | null; } | { __typename: "RouteRedirect"; } | null; menuMain: { [$tada.fragmentRefs]: { MenuFragment: "Menu"; }; } | null; menuFooter: { [$tada.fragmentRefs]: { MenuFragment: "Menu"; }; } | null; }, { path: string; }, void>;
  }
}
