'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">course-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b973a22760556bdae74bc1765c8be691"' : 'data-target="#xs-components-links-module-AppModule-b973a22760556bdae74bc1765c8be691"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b973a22760556bdae74bc1765c8be691"' :
                                            'id="xs-components-links-module-AppModule-b973a22760556bdae74bc1765c8be691"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-21e57d5d6c359e214a46f31f78456e05"' : 'data-target="#xs-components-links-module-AuthModule-21e57d5d6c359e214a46f31f78456e05"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-21e57d5d6c359e214a46f31f78456e05"' :
                                            'id="xs-components-links-module-AuthModule-21e57d5d6c359e214a46f31f78456e05"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-0eeeb51a4962329d0d1a889694c882c1"' : 'data-target="#xs-injectables-links-module-CoreModule-0eeeb51a4962329d0d1a889694c882c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-0eeeb51a4962329d0d1a889694c882c1"' :
                                        'id="xs-injectables-links-module-CoreModule-0eeeb51a4962329d0d1a889694c882c1"' }>
                                        <li class="link">
                                            <a href="injectables/RecipeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RecipeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipesModule.html" data-type="entity-link">RecipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RecipesModule-15b27013f9ff021c8bd1c646caba8718"' : 'data-target="#xs-components-links-module-RecipesModule-15b27013f9ff021c8bd1c646caba8718"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecipesModule-15b27013f9ff021c8bd1c646caba8718"' :
                                            'id="xs-components-links-module-RecipesModule-15b27013f9ff021c8bd1c646caba8718"' }>
                                            <li class="link">
                                                <a href="components/RecipeDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecipeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecipeEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecipeItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecipeListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeStartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecipeStartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecipesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipesRoutingModule.html" data-type="entity-link">RecipesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' : 'data-target="#xs-components-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' :
                                            'id="xs-components-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingSpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' : 'data-target="#xs-directives-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' :
                                        'id="xs-directives-links-module-SharedModule-e1d5ff3e7dddafba4c7bf6137fc349a6"' }>
                                        <li class="link">
                                            <a href="directives/DropdownDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropdownDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PlaceholderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaceholderDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingListModule.html" data-type="entity-link">ShoppingListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShoppingListModule-e0d21059e22424d6a13d1d490e5eea8f"' : 'data-target="#xs-components-links-module-ShoppingListModule-e0d21059e22424d6a13d1d490e5eea8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingListModule-e0d21059e22424d6a13d1d490e5eea8f"' :
                                            'id="xs-components-links-module-ShoppingListModule-e0d21059e22424d6a13d1d490e5eea8f"' }>
                                            <li class="link">
                                                <a href="components/ShoppingEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShoppingEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShoppingListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingListRoutingModule.html" data-type="entity-link">ShoppingListRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Ingredient.html" data-type="entity-link">Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggingService.html" data-type="entity-link">LoggingService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recipe.html" data-type="entity-link">Recipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShoppingListService.html" data-type="entity-link">ShoppingListService</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataStorageService.html" data-type="entity-link">DataStorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptorService.html" data-type="entity-link">AuthInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RecipesResolverService.html" data-type="entity-link">RecipesResolverService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthResponseData.html" data-type="entity-link">AuthResponseData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});