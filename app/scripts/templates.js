define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/about/contacts.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"posts-about__contacts\" id=\"contacts\">\n	<div class=\"posts-about__contacts__header\">\n		<h4 class=\"posts-about__contacts__header__title\">contactos</h4>\n\n		\n	</div>\n\n	<div class=\"posts-about__contacts__container\">\n		<div class=\"posts-about__contacts__container__block\">\n			";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_phone", options) : helperMissing.call(depth0, "view", "icons/ic_phone", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<p>+351 217 512 100</p>\n		</div>\n		<div class=\"posts-about__contacts__container__block\">\n			";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_email", options) : helperMissing.call(depth0, "view", "icons/ic_email", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<p>cisp@ensp.unl.pt</p>\n		</div>\n		<div class=\"posts-about__contacts__container__block\">\n			";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_pin", options) : helperMissing.call(depth0, "view", "icons/ic_pin", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<p>Escola Nacional de Saúde Pública</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"posts-about__header\">\n	<ul class=\"posts-about__header__menu\">\n		\n		<li id=\"navigate-mission\">Missão</li>\n		<li id=\"navigate-thematic\">Linhas Temáticas</li>\n		\n		\n		<li id=\"navigate-contacts\">Contactos</li>\n	</ul>\n</div>\n<div id=\"about-container\" class=\"posts-about__container\">\n	<div id=\"about-mission\"></div>\n	\n	<div id=\"about-thematic\"></div>\n	\n	<div id=\"about-contacts\"></div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/mission", options) : helperMissing.call(depth0, "view", "about/mission", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/thematicLines", options) : helperMissing.call(depth0, "view", "about/thematicLines", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/scientificBoard", options) : helperMissing.call(depth0, "view", "about/scientificBoard", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/management", options) : helperMissing.call(depth0, "view", "about/management", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "about/contacts", options) : helperMissing.call(depth0, "view", "about/contacts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "mission", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "mission", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "thematic-lines", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "thematic-lines", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "scientific-advisory-board", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "scientific-advisory-board", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "management", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "management", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.slug), "===", "contacts", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.slug), "===", "contacts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["app/scripts/templates/about/management.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"posts-about__management\" id=\"management\">\n	<div class=\"posts-about__management__header\">\n		<h4 class=\"posts-about__management__header__title\">gestão</h4>\n\n		\n	</div>\n	\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column sci-board__row__column--align-right\">\n			<div class=\"sci-board__row__thumbnail posts-about__management--thumbnail\" style=\"background-image: url('images/about/scientific_board/paula_lobato_faria.jpg')\"></div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--second\">\n			<div class=\"sci-board__row__info posts-about__management--info posts-about__management--info--align-left\">\n				<div class=\"sci-board__row__info__position\">Cargo</div>\n				<div class=\"sci-board__row__info__name\">Paula Lobato Faria</div>\n				<div class=\"sci-board__row__info__description posts-about__management--description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				<a href=\"\" class=\"sci-board__row__info__see-more posts-about__management--see-more\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ver mais</a>\n\n			</div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column\">\n			<div class=\"sci-board__row__info sci-board__row__info--align-right posts-about__management--info\">\n				<div class=\"sci-board__row__info__position\">Cargo</div>\n				<div class=\"sci-board__row__info__name\">Carlos Dias</div>\n				<div class=\"sci-board__row__info__description posts-about__management--description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				<a href=\"\" class=\"sci-board__row__info__see-more sci-board__row__info__see-more--align-right posts-about__management--see-more\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ver mais</a>\n\n			</div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--align-left\">\n			<div class=\"sci-board__row__thumbnail posts-about__management--thumbnail\" style=\"background-image: url('images/about/scientific_board/carlos_dias.jpg')\"></div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__organogram\">\n		<img src=\"images/about/scientific_comission/organogram.jpg\" class=\"sci-board__organogram\" alt=\"CISP - scientific comission organogram\">\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/mission.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<div class=\"posts-about__mission\" id=\"mission\">\n	<div class=\"posts-about__mission__text\">\n		";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	\n	\n	\n	\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/scientificBoard.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"sci-board\" id=\"scientific-board\">\n	\n	<div class=\"sci-board__row\">\n\n		<h4 class=\"sci-board__row__title\">quadro de <br> aconselhamento <br> científico</h4>\n\n		\n	</div>\n	\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column sci-board__row__column--align-right\">\n			<div class=\"sci-board__row__thumbnail\" style=\"background-image: url('images/about/scientific_board/paula_lobato_faria.jpg')\"></div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--second\">\n			<div class=\"sci-board__row__info\">\n				\n				<div class=\"sci-board__row__info__name\">Paula Lobato Faria</div>\n				<div class=\"sci-board__row__info__description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				\n\n			</div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column\">\n			<div class=\"sci-board__row__info sci-board__row__info--align-right\">\n				\n				<div class=\"sci-board__row__info__name\">Carlos Dias</div>\n				<div class=\"sci-board__row__info__description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				\n\n			</div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--align-left\">\n			<div class=\"sci-board__row__thumbnail\" style=\"background-image: url('images/about/scientific_board/carlos_dias.jpg')\"></div>\n		</div>\n\n	</div>\n\n	<div class=\"sci-board__row\">\n		\n		<div class=\"sci-board__row__column sci-board__row__column--align-right\">\n			<div class=\"sci-board__row__thumbnail\" style=\"background-image: url('images/about/scientific_board/luis_saboga.jpg')\"></div>\n		</div>\n\n		<div class=\"sci-board__row__column sci-board__row__column--second\">\n			<div class=\"sci-board__row__info\">\n				\n				<div class=\"sci-board__row__info__name\">Paula Lobato Faria</div>\n				<div class=\"sci-board__row__info__description\">\n					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n					consequat.\n				</div>\n\n				\n\n			</div>\n		</div>\n\n	</div>\n\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/about/scientificComission.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"posts-about__sci-comission\" id=\"scientific-comission\">\n	\n	<div class=\"posts-about__sci-comission__header\">\n		<h4 class=\"posts-about__sci-comission__header__title\">Comissão Científica</h4>\n	</div>\n\n	<div class=\"posts-about__sci-comission__description\">\n		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At porro quaerat vero, cum a aliquid impedit. Eius nemo quaerat magni accusantium soluta atque praesentium, eum reprehenderit. Adipisci inventore, dolore voluptas.</p>\n		<p>Possimus iste tempore labore, a omnis at aliquid, eius explicabo neque, dolores, nisi ducimus delectus velit cum! Delectus natus omnis, nulla ex, illo possimus, voluptates, placeat maxime voluptatum doloremque quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n		<p>Non nobis omnis esse minima possimus rem, magnam est, corrupti minus nihil, tempore eum! Omnis quaerat, perferendis. Vero debitis nemo distinctio quis dolorem assumenda, harum praesentium fugit nisi tempore libero.</p>\n		<p>Qui similique rerum commodi explicabo aperiam officiis dolor, porro pariatur libero minima aliquam placeat veniam, dolorum harum enim perspiciatis laudantium, esse sapiente. Minima, explicabo ducimus cumque laboriosam odit nulla perspiciatis.</p>\n		<p>Ex doloribus impedit, ipsam voluptatem? Repudiandae nulla dolorem nemo excepturi blanditiis, aliquam qui, natus repellat laudantium autem laboriosam cupiditate reiciendis molestiae iste dignissimos maiores tempore eaque officiis a, voluptatibus atque?</p>\n		<p>Quis culpa nesciunt molestias ipsa, cum cupiditate dolore similique ducimus in, ratione reiciendis doloremque. Fugiat aut delectus illum, dolore! Recusandae, unde. Enim, quod vel natus necessitatibus aperiam accusantium, quaerat aspernatur.</p>\n		<p>Similique voluptates quis laborum quo, voluptatem, dicta illo aperiam ipsa beatae, excepturi quae. Vel sit praesentium provident cum iusto iste sapiente explicabo adipisci nisi animi, doloribus porro officia, ipsa ipsum.</p>\n		<p>Nulla, debitis, vero? Doloribus excepturi suscipit, recusandae similique, voluptatum autem commodi soluta odio laboriosam, laudantium eveniet itaque deleniti nemo magni iure maiores ea. Commodi aut officia obcaecati ipsa, eveniet repudiandae.</p>\n	</div>\n	\n	<img src=\"images/about/scientific_comission/organogram.jpg\" class=\"posts-about__sci-comission__organogram\" alt=\"CISP - scientific comission organogram\">\n\n</div>";
  });

this["JST"]["app/scripts/templates/about/thematicLines.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"posts-about__thematic\" id=\"thematic-lines\">\n	<div class=\"posts-about__thematic__header\">\n		<h4 class=\"posts-about__thematic__header__title\">linhas temáticas</h4>\n	</div>\n\n	<div class=\"posts-about__thematic__container\">\n\n		<img src=\"images/about/thematic_lines/organogram.jpg\" class=\"posts-about__thematic__container__organogram\" alt=\"CISP - scientific comission organogram\">\n	</div>\n</div>";
  });

this["JST"]["app/scripts/templates/components/spinner.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"spinner\"><div class=\"signal\"></div></div>";
  });

this["JST"]["app/scripts/templates/events/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#eventos\" class=\"close\">+</a>\n<div class=\"event__detail__wrapper\">\n	<section class=\"event__detail__column\">\n		<div class=\"post__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<!-- <time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time> -->\n		</div>\n\n		<h2 class=\"event__detail__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<p class=\"event__detail__when\">\n			<span>Quando:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</p>\n		<p class=\"event__detail__where\">\n			<span>Onde:</span> "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</p>\n	</section>\n	<section class=\"event__detail__column\">\n\n		<div class=\"content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/events/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n<div class=\"post-list__header__no-content\">\n	<p>Pedimos desculpa, não foram encontrados resultados.</p>\n</div>\n";
  }

function program3(depth0,data) {
  
  
  return "\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n";
  }

  buffer += "<div class=\"post-list__header\">\n	<div class=\"post-list__header__title\"></div>\n\n	<div class=\"post-list__header__search\">\n		<input id=\"post-list-search\" type=\"text\" placeholder=\"Pesquisar\">\n		<button id=\"events-search-button\" class=\"hidden\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_search", options) : helperMissing.call(depth0, "view", "icons/ic_search", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	</div>\n</div>\n\n<div class=\"post-list__section__title\">\n	<h2>Public Health Research Seminars</h2>\n</div>\n\n<div id=\"post-list-container\" class=\"post-list__container\">\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/events/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"post-list__new__content__when\"><span>Quando: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"post-list__new__content__where\"><span>Onde: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"post-list__new__thumbnail\"\nstyle=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n\n	<!-- <time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__thumbnail__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time> -->\n</div>\n\n<section class=\"post-list__new__content\">\n\n	<h2 class=\"post-list__new__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<div class=\"post-list__new__content__text\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.excerpt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	<a href=\"#eventos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__content__button\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/footer/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"footer__logo\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_logo-v01", options) : helperMissing.call(depth0, "view", "icons/ic_logo-v01", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<p class=\"footer__copy-right\">COPYRIGHT ® 2015 Centro de Investigação em Saúde Pública. Todos os direitos reservados</p>\n<div class=\"footer__partners\">\n	<a href=\"https://www.ensp.unl.pt\" target=\"_blank\" class=\"footer__partners__ensp\"></a>\n	<div class=\"footer__partners__fct\"></div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/header/heroSection.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n	<h2 class=\"hero-section__claim\">From research to action</h2>\n  <div class=\"hero-section__block__text\">1º centro de investigação exclusivamente dedicado à Saúde Pública.</div>\n";
  }

  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", "home", options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", "home", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["app/scripts/templates/header/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "active";
  }

  buffer += "<div class=\"banner\">\n  <a href=\"\" class=\"logo\" id=\"logo\">\n    <div class=\"logo--cisp\">\n      ";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_logo-v02", options) : helperMissing.call(depth0, "view", "icons/ic_logo-v02", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"logo--ensp\"></div>\n  </a>\n  <div id=\"menu\" class=\"menu\"></div>\n</div>\n\n<div id=\"hero-section\" class=\"hero-section ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", (depth0 && depth0.home), options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.catg), "===", (depth0 && depth0.home), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/header/menu.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div id=\"menu-button\" class=\"menu__button\">\n\n  <div class=\"menu__button menu__button--open active\" id=\"menu-open\">\n    ";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_menu", options) : helperMissing.call(depth0, "view", "icons/ic_menu", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"menu__button menu__button--close\" id=\"menu-close\">\n    ";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_close", options) : helperMissing.call(depth0, "view", "icons/ic_close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n\n<ul id=\"menu-wrapper\" class=\"menu__wrapper\">\n  <li>\n    <a href=\"#sobre\">Quem somos</a>\n    <ul class=\"sub-menu\">\n      <li><a href=\"#sobre/missao\">Missão</a></li>\n      <li><a href=\"#sobre/linhas-tematicas\">Linhas Temáticas</a></li>\n      <li><a href=\"#membros\">Membros</a></li>\n      <li><a href=\"#sobre/comissao-acompanhamento\">Comissão de Acompanhamento</a></li>\n    </ul>\n  </li>\n  <li><a href=\"#projetos\">Projetos</a></li>\n  <li><a href=\"#eventos\">Eventos</a></li>\n  <li><a href=\"#publicacoes\">Publicações</a></li>\n  <li><a href=\"#noticias\">Notícias</a></li>\n  <li><a href=\"#bolsas\">Bolsas</a></li>\n  <li><a href=\"#contactos\">Contactos</a></li>\n</ul>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/eventsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"home__section__new__content__when\"><span>Quando: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"home__section__new__content__where\"><span>Onde: </span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.where)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"home__section__new__content\">\n	<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.excerpt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.when), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<a href=\"#eventos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</div>\n\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/eventsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"home__section__title\"><a href=\"#eventos\">Eventos</a></div>\n";
  });

this["JST"]["app/scripts/templates/home/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<section class=\"home__section\" id=\"home-news\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</section>\n\n<section class=\"home__section\" id=\"home-events\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</section>\n\n<section class=\"home__section\" id=\"home-publications\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/newsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"home__section__new__image\" style=\"background-image: url(";
  if (helper = helpers.thumbnail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\"> </div>\n";
  return buffer;
  }

  buffer += "<div class=\"home__section__new__content\">\n	<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.excerpt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	<a href=\"#noticias/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.thumbnail), "&&", (depth0 && depth0.isLarge), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.thumbnail), "&&", (depth0 && depth0.isLarge), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/newsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"home__section__title\"><a href=\"#noticias\">Notícias</a></div>";
  });

this["JST"]["app/scripts/templates/home/publicationsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"home__section__publication__content\">\n	<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n	<p>";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	\n	<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/home/publicationsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"home__section__title\"><a href=\"#publicacoes\">Publicações</a></div>";
  });

this["JST"]["app/scripts/templates/icons/ic_arrow-right.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_close.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"36px\" height=\"36px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_email.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_logo-v01.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"116px\" height=\"27px\" viewBox=\"0 0 116 27\">\n	<path fill=\"#414141\" d=\"M7.1,13.4c0-0.9,0.2-1.9,0.5-2.8C8,9.7,8.6,8.9,9.3,8.2c0.7-0.7,1.5-1.3,2.6-1.7c1-0.4,2.1-0.7,3.4-0.7\n		c1.5,0,2.8,0.3,3.9,0.9c1.1,0.6,1.9,1.4,2.5,2.4l-2.5,1.6c-0.2-0.4-0.5-0.8-0.8-1.1c-0.3-0.3-0.6-0.5-1-0.7\n		c-0.4-0.2-0.7-0.3-1.1-0.4c-0.4-0.1-0.8-0.1-1.1-0.1c-0.8,0-1.5,0.2-2.1,0.5C12.5,9.1,12,9.5,11.6,10c-0.4,0.5-0.7,1-0.9,1.6\n		c-0.2,0.6-0.3,1.2-0.3,1.8c0,0.7,0.1,1.3,0.3,2c0.2,0.6,0.6,1.2,1,1.7c0.4,0.5,0.9,0.9,1.5,1.1c0.6,0.3,1.2,0.4,2,0.4\n		c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.8-0.2,1.1-0.4c0.4-0.2,0.7-0.4,1-0.7c0.3-0.3,0.6-0.6,0.7-1.1l2.6,1.4c-0.3,0.6-0.6,1.1-1.1,1.5\n		c-0.5,0.4-1,0.8-1.6,1.1c-0.6,0.3-1.3,0.5-2,0.7c-0.7,0.2-1.4,0.2-2,0.2c-1.2,0-2.3-0.2-3.2-0.7c-1-0.5-1.8-1.1-2.5-1.8\n		c-0.7-0.7-1.3-1.6-1.6-2.5C7.3,15.3,7.1,14.4,7.1,13.4\"/>\n	<rect x=\"41.9\" y=\"5.9\" fill=\"#414141\" width=\"3.2\" height=\"15.3\"/>\n	<path fill=\"#414141\" d=\"M77,9.9c-0.1-0.1-0.3-0.2-0.6-0.4c-0.3-0.2-0.6-0.3-1-0.5C75,8.8,74.5,8.6,74,8.5c-0.5-0.1-1-0.2-1.5-0.2\n		c-0.9,0-1.5,0.2-2,0.5C70.2,9.1,70,9.5,70,10.1c0,0.3,0.1,0.6,0.2,0.8c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.7,0.3,1.2,0.4\n		c0.5,0.1,1,0.3,1.6,0.4c0.8,0.2,1.5,0.4,2.2,0.6c0.7,0.2,1.2,0.5,1.7,0.9c0.5,0.3,0.8,0.8,1.1,1.2c0.2,0.5,0.4,1.1,0.4,1.8\n		c0,0.8-0.2,1.5-0.5,2.1c-0.3,0.6-0.8,1.1-1.3,1.4c-0.6,0.4-1.2,0.6-1.9,0.8c-0.7,0.2-1.5,0.2-2.3,0.2c-1.2,0-2.5-0.2-3.7-0.5\n		C68,20.5,67,20,66,19.4l1.4-2.6c0.1,0.1,0.4,0.3,0.8,0.5c0.4,0.2,0.8,0.4,1.3,0.6c0.5,0.2,1,0.4,1.6,0.5c0.6,0.1,1.2,0.2,1.9,0.2\n		c1.8,0,2.6-0.5,2.6-1.6c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.9-0.6c-0.4-0.2-0.8-0.3-1.3-0.5c-0.5-0.1-1.1-0.3-1.8-0.5\n		c-0.8-0.2-1.5-0.4-2.1-0.7c-0.6-0.2-1.1-0.5-1.4-0.8c-0.4-0.3-0.7-0.7-0.9-1.1c-0.2-0.4-0.3-0.9-0.3-1.5c0-0.8,0.2-1.5,0.5-2.1\n		c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.7,1.9-0.9c0.7-0.2,1.5-0.3,2.3-0.3c1.2,0,2.2,0.2,3.2,0.5c1,0.3,1.8,0.7,2.6,1.2L77,9.9z\"\n		/>\n	<path fill=\"#414141\" d=\"M95.4,21.2V5.9h7c0.8,0,1.5,0.1,2.1,0.4c0.6,0.3,1.2,0.7,1.7,1.2c0.5,0.5,0.8,1,1.1,1.6\n		c0.3,0.6,0.4,1.2,0.4,1.8c0,0.6-0.1,1.3-0.4,1.9c-0.2,0.6-0.6,1.2-1,1.6c-0.4,0.5-1,0.9-1.6,1.1c-0.6,0.3-1.3,0.4-2.1,0.4h-3.9v5.1\n		H95.4z M98.6,13.5h3.7c0.6,0,1.1-0.2,1.5-0.7c0.4-0.4,0.6-1,0.6-1.8c0-0.4-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.5-0.8\n		c-0.2-0.2-0.4-0.4-0.7-0.5c-0.3-0.1-0.5-0.2-0.8-0.2h-3.6V13.5z\"/>\n	<path fill=\"#414141\" d=\"M113.6,24.8H2.4V2.3h111.2V24.8z M116,0H0v27h116V0z\"/>\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_logo-v02.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"116px\" height=\"27px\" viewBox=\"0 0 116 27\">\n  <defs>\n    <style>\n      .cls-1,\n      .cls-2 {\n        fill: #231f20;\n      }\n\n      .cls-2 {\n        stroke: #231f20;\n        stroke-miterlimit: 10;\n        stroke-width: 0.28px;\n      }\n\n      .cls-3 {\n        fill: #39b54a;\n      }\n    </style>\n  </defs>\n  <title>Untitled-1</title>\n  <path class=\"cls-1\" d=\"M33.51,7H31.19v14h2.32v4.64H24.23V20.92h2.32V7H24.23V2.33h9.28V7Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M45.5,26.16c-4.7,0-9.28-2.68-9.28-7V18.75h4.64V19.2c0,1.36,2.56,2.32,4.64,2.32a6,6,0,0,0,4.22-1.45L36.22,9.86V8.69c0-4.22,4.43-7,9.28-7s9.28,2.71,9.28,7V9.14H50.14V8.69c0-1.36-2.56-2.32-4.64-2.32a6.1,6.1,0,0,0-4.22,1.45L54.78,18V19.2C54.78,23.39,50.35,26.16,45.5,26.16Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M18.83,17.47a7.61,7.61,0,0,1-6.73,4.06h0a7.47,7.47,0,0,1-1.33-.12A7.61,7.61,0,1,1,17.4,8.46l3.24-3.21a12,12,0,0,0-8.56-3.53A12.1,12.1,0,0,0,0,14a12.11,12.11,0,0,0,12.08,12.2,12,12,0,0,0,10-5.33Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M68.94,2.28H57.79V6.91H68.94a3.49,3.49,0,0,1,.16,7H57.79V25.51h4.64v-7h6.51A8.14,8.14,0,0,0,68.94,2.28Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M26.59,34a1,1,0,0,1-.17.19,1.06,1.06,0,0,1-.23.16,1.3,1.3,0,0,1-.27.1,1.27,1.27,0,0,1-.31,0,1.42,1.42,0,0,1-.55-0.1,1.32,1.32,0,0,1-.73-0.73,1.54,1.54,0,0,1,0-1.11,1.32,1.32,0,0,1,.73-0.73,1.42,1.42,0,0,1,.55-0.1,1.34,1.34,0,0,1,.49.1,1,1,0,0,1,.42.32l-0.24.18a0.64,0.64,0,0,0-.11-0.13L26,32.1,25.82,32a0.76,0.76,0,0,0-.21,0,1.07,1.07,0,0,0-.46.09,1,1,0,0,0-.34.25,1.1,1.1,0,0,0-.22.36,1.31,1.31,0,0,0,0,.87,1.1,1.1,0,0,0,.22.36,1,1,0,0,0,.34.25,1.08,1.08,0,0,0,.46.09l0.21,0L26,34.2a0.77,0.77,0,0,0,.19-0.12,0.92,0.92,0,0,0,.16-0.19Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M27.31,34.21h1.42v0.25H27V31.81h1.64v0.25H27.31V33h1.28v0.25H27.31v1Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M31.18,34.06h0V31.81h0.27v2.65H31.12l-1.58-2.27h0v2.27H29.26V31.81H29.6Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M33,34.46H32.75v-2.4H31.86V31.81h2v0.25H33v2.4Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M34.59,34.46H34.32V31.81h0.82a1,1,0,0,1,.64.18,0.62,0.62,0,0,1,.23.53,0.66,0.66,0,0,1-.17.47,0.75,0.75,0,0,1-.5.22l0.76,1.26H35.76L35,33.23H34.59v1.23Zm0-1.48h0.48a1.07,1.07,0,0,0,.3,0,0.56,0.56,0,0,0,.2-0.1,0.36,0.36,0,0,0,.11-0.15,0.48,0.48,0,0,0,0-.18,0.47,0.47,0,0,0,0-.18,0.38,0.38,0,0,0-.11-0.15,0.53,0.53,0,0,0-.2-0.1,1.13,1.13,0,0,0-.3,0H34.59V33Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M39.12,33.14a1.45,1.45,0,0,1-.11.56,1.32,1.32,0,0,1-.73.73,1.49,1.49,0,0,1-1.1,0,1.32,1.32,0,0,1-.73-0.73,1.54,1.54,0,0,1,0-1.11,1.32,1.32,0,0,1,.73-0.73,1.49,1.49,0,0,1,1.1,0,1.32,1.32,0,0,1,.73.73A1.45,1.45,0,0,1,39.12,33.14Zm-0.29,0a1.28,1.28,0,0,0-.08-0.44,1.1,1.1,0,0,0-.21-0.36,1,1,0,0,0-.34-0.25,1.16,1.16,0,0,0-.91,0,1,1,0,0,0-.34.25,1.1,1.1,0,0,0-.22.36,1.31,1.31,0,0,0,0,.87,1.1,1.1,0,0,0,.22.36,1,1,0,0,0,.34.25,1.16,1.16,0,0,0,.91,0,1,1,0,0,0,.34-0.25,1.1,1.1,0,0,0,.21-0.36A1.28,1.28,0,0,0,38.83,33.14Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M41.7,31.81h0.88a1.57,1.57,0,0,1,.5.08,1.37,1.37,0,0,1,.45.25,1.26,1.26,0,0,1,.32.42,1.42,1.42,0,0,1,0,1.16,1.27,1.27,0,0,1-.32.41,1.37,1.37,0,0,1-.45.25,1.57,1.57,0,0,1-.5.08H41.7V31.81ZM42,34.21h0.52A1.38,1.38,0,0,0,43,34.12a1.09,1.09,0,0,0,.37-0.24,1,1,0,0,0,.22-0.34,1.16,1.16,0,0,0,0-.8,1,1,0,0,0-.22-0.34A1.09,1.09,0,0,0,43,32.15a1.38,1.38,0,0,0-.53-0.09H42v2.16Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M44.78,34.21H46.2v0.25H44.51V31.81h1.64v0.25H44.78V33h1.28v0.25H44.78v1Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M49.08,34.46H48.81V31.81h0.27v2.65Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M51.71,34.06h0V31.81H52v2.65H51.65l-1.58-2.27h0v2.27H49.8V31.81h0.34Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M53.48,34.06h0l0.87-2.25h0.29l-1,2.65H53.35l-1-2.65h0.3Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M55.27,34.21h1.42v0.25H55V31.81h1.64v0.25H55.27V33h1.28v0.25H55.27v1Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M58.47,32.25A0.58,0.58,0,0,0,58,32l-0.21,0a0.57,0.57,0,0,0-.18.09,0.43,0.43,0,0,0-.13.15,0.45,0.45,0,0,0,0,.22,0.37,0.37,0,0,0,.1.28,0.8,0.8,0,0,0,.25.16L58.07,33a1.5,1.5,0,0,1,.33.13,0.78,0.78,0,0,1,.25.22,0.63,0.63,0,0,1,.1.38,0.68,0.68,0,0,1-.08.32,0.74,0.74,0,0,1-.2.24,1,1,0,0,1-.28.15,1,1,0,0,1-.31.05,1.18,1.18,0,0,1-.46-0.09,0.87,0.87,0,0,1-.37-0.3L57.29,34a0.64,0.64,0,0,0,.24.23,0.71,0.71,0,0,0,.36.09,0.66,0.66,0,0,0,.2,0,0.57,0.57,0,0,0,.18-0.09A0.52,0.52,0,0,0,58.41,34a0.4,0.4,0,0,0,.05-0.21,0.42,0.42,0,0,0-.06-0.23,0.49,0.49,0,0,0-.15-0.15,1,1,0,0,0-.22-0.1l-0.25-.08-0.25-.09A0.86,0.86,0,0,1,57.31,33a0.59,0.59,0,0,1-.15-0.2,0.71,0.71,0,0,1-.06-0.3,0.72,0.72,0,0,1,.07-0.33,0.69,0.69,0,0,1,.19-0.24,0.83,0.83,0,0,1,.28-0.14,1.11,1.11,0,0,1,.31,0,1.12,1.12,0,0,1,.41.07,0.88,0.88,0,0,1,.34.25Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M60.15,34.46H59.88v-2.4H59V31.81h2v0.25H60.15v2.4Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M61.71,34.46H61.44V31.81h0.27v2.65Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M64.39,32.3a1,1,0,0,0-.32-0.22,1.17,1.17,0,0,0-.89,0,1,1,0,0,0-.34.25,1.1,1.1,0,0,0-.22.36,1.31,1.31,0,0,0,0,.87,1.1,1.1,0,0,0,.22.36,1,1,0,0,0,.34.25,1.08,1.08,0,0,0,.46.09A1.52,1.52,0,0,0,64,34.23a1.41,1.41,0,0,0,.34-0.14V33.21H63.73V33h0.9v1.3a1.93,1.93,0,0,1-.49.2,2,2,0,0,1-.51.07,1.42,1.42,0,0,1-.55-0.1,1.32,1.32,0,0,1-.73-0.73,1.54,1.54,0,0,1,0-1.11,1.32,1.32,0,0,1,.73-0.73,1.42,1.42,0,0,1,.55-0.1,1.54,1.54,0,0,1,.55.09,1.16,1.16,0,0,1,.41.27Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M65.3,34.46H65l1.15-2.65H66.4l1.15,2.65H67.24l-0.29-.7H65.59Zm0.39-.94h1.15l-0.57-1.39Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M68.91,34.69h0l0.06,0h0.07a0.31,0.31,0,0,1,.2.07,0.25,0.25,0,0,1,.09.21,0.28,0.28,0,0,1,0,.15,0.32,0.32,0,0,1-.1.1l-0.14.06-0.15,0a0.76,0.76,0,0,1-.36-0.09L68.61,35a0.58,0.58,0,0,0,.28.07,0.35,0.35,0,0,0,.16,0,0.13,0.13,0,0,0,.07-0.13v0l0-.05-0.06,0-0.09,0H68.84l-0.08,0-0.07-.06,0.19-.27a1.32,1.32,0,0,1-1.05-.82,1.54,1.54,0,0,1,0-1.11,1.32,1.32,0,0,1,.73-0.73,1.42,1.42,0,0,1,.55-0.1,1.34,1.34,0,0,1,.49.1,1,1,0,0,1,.42.32l-0.24.18a0.64,0.64,0,0,0-.11-0.13l-0.16-.11L69.32,32a0.76,0.76,0,0,0-.21,0,1.08,1.08,0,0,0-.46.09,1,1,0,0,0-.34.25,1.1,1.1,0,0,0-.22.36,1.31,1.31,0,0,0,0,.87,1.1,1.1,0,0,0,.22.36,1,1,0,0,0,.34.25,1.08,1.08,0,0,0,.46.09l0.21,0,0.2-.06a0.76,0.76,0,0,0,.19-0.12,0.9,0.9,0,0,0,.16-0.19L70.09,34a1,1,0,0,1-.17.19,1.06,1.06,0,0,1-.23.16,1.3,1.3,0,0,1-.27.1,1.27,1.27,0,0,1-.31,0H69Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M70.5,34.46H70.18l1.15-2.65H71.6l1.15,2.65H72.44l-0.29-.7H70.79Zm0.36-2.81a0.84,0.84,0,0,1,0-.14A0.44,0.44,0,0,1,71,31.38a0.34,0.34,0,0,1,.1-0.09,0.28,0.28,0,0,1,.14,0l0.14,0,0.14,0.06,0.13,0.06,0.12,0a0.14,0.14,0,0,0,.13-0.06,0.42,0.42,0,0,0,.06-0.13h0.16a0.82,0.82,0,0,1,0,.14,0.45,0.45,0,0,1-.07.12,0.32,0.32,0,0,1-.1.09,0.29,0.29,0,0,1-.14,0l-0.14,0-0.14-.06-0.13-.06-0.12,0a0.14,0.14,0,0,0-.13.06,0.42,0.42,0,0,0-.06.13H70.86Zm0,1.87H72l-0.57-1.39Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M75.69,33.14a1.45,1.45,0,0,1-.11.56,1.32,1.32,0,0,1-.73.73,1.49,1.49,0,0,1-1.1,0A1.32,1.32,0,0,1,73,33.69a1.54,1.54,0,0,1,0-1.11,1.32,1.32,0,0,1,.73-0.73,1.49,1.49,0,0,1,1.1,0,1.32,1.32,0,0,1,.73.73A1.45,1.45,0,0,1,75.69,33.14Zm-0.29,0a1.28,1.28,0,0,0-.08-0.44,1.1,1.1,0,0,0-.21-0.36,1,1,0,0,0-.34-0.25,1.16,1.16,0,0,0-.91,0,1,1,0,0,0-.34.25,1.1,1.1,0,0,0-.22.36,1.31,1.31,0,0,0,0,.87,1.1,1.1,0,0,0,.22.36,1,1,0,0,0,.34.25,1.16,1.16,0,0,0,.91,0,1,1,0,0,0,.34-0.25,1.1,1.1,0,0,0,.21-0.36A1.28,1.28,0,0,0,75.4,33.14Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M78.58,34.21H80v0.25H78.31V31.81H80v0.25H78.58V33h1.28v0.25H78.58v1Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M81.84,34l0.89-2.16h0.41v2.65H82.87V32.17h0l-1,2.29H81.77l-1-2.29h0v2.29H80.53V31.81h0.41Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-2\"\n        d=\"M87.19,32.25A0.58,0.58,0,0,0,86.68,32l-0.21,0a0.57,0.57,0,0,0-.18.09,0.43,0.43,0,0,0-.13.15,0.45,0.45,0,0,0,0,.22,0.37,0.37,0,0,0,.1.28,0.8,0.8,0,0,0,.25.16L86.8,33a1.5,1.5,0,0,1,.33.13,0.78,0.78,0,0,1,.25.22,0.63,0.63,0,0,1,.1.38,0.68,0.68,0,0,1-.08.32,0.74,0.74,0,0,1-.2.24,1,1,0,0,1-.28.15,1,1,0,0,1-.31.05,1.18,1.18,0,0,1-.46-0.09,0.87,0.87,0,0,1-.37-0.3L86,34a0.65,0.65,0,0,0,.24.23,0.71,0.71,0,0,0,.36.09,0.66,0.66,0,0,0,.2,0A0.58,0.58,0,0,0,87,34.16,0.52,0.52,0,0,0,87.13,34a0.4,0.4,0,0,0,.05-0.21,0.42,0.42,0,0,0-.06-0.23A0.49,0.49,0,0,0,87,33.42a1,1,0,0,0-.22-0.1l-0.25-.08-0.25-.09A0.86,0.86,0,0,1,86,33a0.59,0.59,0,0,1-.15-0.2,0.71,0.71,0,0,1-.06-0.3,0.72,0.72,0,0,1,.07-0.33,0.69,0.69,0,0,1,.19-0.24,0.83,0.83,0,0,1,.28-0.14,1.11,1.11,0,0,1,.31,0,1.12,1.12,0,0,1,.41.07,0.88,0.88,0,0,1,.34.25Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-2\" d=\"M88,34.46H87.66l1.15-2.65h0.26l1.15,2.65H89.92l-0.29-.7H88.27Zm0.39-.94h1.15l-0.57-1.39Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-2\"\n        d=\"M92.48,33.47a1.69,1.69,0,0,1,0,.35,0.94,0.94,0,0,1-.15.34,0.84,0.84,0,0,1-.3.26,1.2,1.2,0,0,1-1,0,0.85,0.85,0,0,1-.3-0.26,0.94,0.94,0,0,1-.15-0.34,1.68,1.68,0,0,1,0-.35V31.81h0.27v1.63a1.25,1.25,0,0,0,0,.33,0.78,0.78,0,0,0,.1.23,0.55,0.55,0,0,0,.14.15l0.15,0.08,0.15,0h0.25l0.15,0,0.15-.08A0.55,0.55,0,0,0,92.08,34a0.79,0.79,0,0,0,.1-0.23,1.24,1.24,0,0,0,0-.33V31.81h0.27v1.66Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-2\"\n        d=\"M93.12,31.81H94a1.57,1.57,0,0,1,.5.08,1.37,1.37,0,0,1,.45.25,1.26,1.26,0,0,1,.32.42,1.42,1.42,0,0,1,0,1.16,1.27,1.27,0,0,1-.32.41,1.37,1.37,0,0,1-.45.25,1.57,1.57,0,0,1-.5.08H93.12V31.81Zm0.27,2.4h0.52a1.38,1.38,0,0,0,.53-0.09,1.09,1.09,0,0,0,.37-0.24A1,1,0,0,0,95,33.54a1.16,1.16,0,0,0,0-.8,1,1,0,0,0-.22-0.34,1.09,1.09,0,0,0-.37-0.24,1.38,1.38,0,0,0-.53-0.09H93.39v2.16Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-2\" d=\"M96.2,34.21h1.42v0.25H95.93V31.81h1.64v0.25H96.2V33h1.28v0.25H96.2v1Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M100.23,31.81H101a1,1,0,0,1,.64.18,0.72,0.72,0,0,1,0,1.06,1,1,0,0,1-.64.18h-0.5v1.23h-0.27V31.81ZM100.5,33h0.43a1.07,1.07,0,0,0,.3,0,0.56,0.56,0,0,0,.2-0.1,0.36,0.36,0,0,0,.11-0.15,0.49,0.49,0,0,0,0-.18,0.48,0.48,0,0,0,0-.18,0.38,0.38,0,0,0-.11-0.15,0.53,0.53,0,0,0-.2-0.1,1.13,1.13,0,0,0-.3,0H100.5V33Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M104.27,33.47a1.69,1.69,0,0,1,0,.35,0.94,0.94,0,0,1-.15.34,0.84,0.84,0,0,1-.3.26,1.2,1.2,0,0,1-1,0,0.85,0.85,0,0,1-.3-0.26,0.94,0.94,0,0,1-.15-0.34,1.68,1.68,0,0,1,0-.35V31.81h0.27v1.63a1.25,1.25,0,0,0,0,.33,0.78,0.78,0,0,0,.1.23,0.55,0.55,0,0,0,.14.15L103,34.23l0.15,0h0.25l0.15,0,0.15-.08a0.55,0.55,0,0,0,.14-0.15,0.79,0.79,0,0,0,.1-0.23,1.24,1.24,0,0,0,0-.33V31.81h0.27v1.66Zm-1-1.78h-0.22l0.37-.54h0.34Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M104.94,31.81h0.79a1.48,1.48,0,0,1,.32,0,0.81,0.81,0,0,1,.27.11,0.59,0.59,0,0,1,.19.21,0.64,0.64,0,0,1,.07.31,0.59,0.59,0,0,1-.12.37,0.59,0.59,0,0,1-.35.21h0a0.64,0.64,0,0,1,.44.2,0.66,0.66,0,0,1,.16.47,0.82,0.82,0,0,1,0,.19,0.63,0.63,0,0,1-.13.25,0.83,0.83,0,0,1-.29.21,1.21,1.21,0,0,1-.51.09h-0.81V31.81ZM105.21,33h0.54l0.19,0a0.5,0.5,0,0,0,.17-0.08,0.42,0.42,0,0,0,.17-0.36,0.58,0.58,0,0,0,0-.12,0.38,0.38,0,0,0-.08-0.15,0.47,0.47,0,0,0-.17-0.13,0.71,0.71,0,0,0-.3-0.05h-0.52V33Zm0,1.24h0.52a1.19,1.19,0,0,0,.27,0,0.68,0.68,0,0,0,.22-0.09,0.46,0.46,0,0,0,.15-0.16,0.44,0.44,0,0,0,.05-0.22,0.46,0.46,0,0,0-.17-0.39,0.81,0.81,0,0,0-.49-0.13h-0.55v1Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M107.57,34.21h1.23v0.25h-1.5V31.81h0.27v2.4Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M109.44,34.46h-0.27V31.81h0.27v2.65Z\" transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M112.34,34a1,1,0,0,1-.17.19,1.06,1.06,0,0,1-.23.16,1.3,1.3,0,0,1-.27.1,1.27,1.27,0,0,1-.31,0,1.42,1.42,0,0,1-.55-0.1,1.32,1.32,0,0,1-.73-0.73,1.54,1.54,0,0,1,0-1.11,1.32,1.32,0,0,1,.73-0.73,1.42,1.42,0,0,1,.55-0.1,1.34,1.34,0,0,1,.49.1,1,1,0,0,1,.42.32l-0.24.18a0.64,0.64,0,0,0-.11-0.13l-0.16-.11-0.2-.08a0.76,0.76,0,0,0-.21,0,1.07,1.07,0,0,0-.46.09,1,1,0,0,0-.34.25,1.1,1.1,0,0,0-.22.36,1.31,1.31,0,0,0,0,.87,1.1,1.1,0,0,0,.22.36,1,1,0,0,0,.34.25,1.08,1.08,0,0,0,.46.09l0.21,0,0.2-.06a0.77,0.77,0,0,0,.19-0.12,0.92,0.92,0,0,0,.16-0.19Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\" d=\"M112.75,34.46h-0.31l1.15-2.65h0.26L115,34.46h-0.31l-0.29-.7H113Zm0.39-.94h1.15l-0.57-1.39Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M86.05,7.94a0.14,0.14,0,0,0,0-.07L85.51,5A0.55,0.55,0,0,0,85,4.52H83.8a1.19,1.19,0,1,0-.71,0H81.92a0.55,0.55,0,0,0-.55.46L80.83,7.88a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V9.43h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V6.2L85,8.12a0.55,0.55,0,0,0,1.1-.1A0.51,0.51,0,0,0,86.05,7.94Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-3\"\n        d=\"M91.81,7.94a0.14,0.14,0,0,0,0-.07L91.27,5a0.55,0.55,0,0,0-.55-0.47H89.55a1.19,1.19,0,1,0-.71,0H87.68a0.55,0.55,0,0,0-.55.46L86.58,7.88a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1L88,6.25l0,6.57a0.56,0.56,0,0,0,1.11,0V9.43h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V6.2l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,91.81,7.94Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M97.56,7.94a0.14,0.14,0,0,0,0-.07L97,5a0.55,0.55,0,0,0-.55-0.47H95.3a1.19,1.19,0,1,0-.71,0H93.43a0.55,0.55,0,0,0-.55.46L92.34,7.88a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V9.43H95v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V6.2l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,97.56,7.94Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M103.31,7.94a0.14,0.14,0,0,0,0-.07L102.77,5a0.55,0.55,0,0,0-.55-0.47h-1.17a1.19,1.19,0,1,0-.71,0H99.18a0.55,0.55,0,0,0-.55.46L98.09,7.88a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V9.43h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V6.2l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,103.31,7.94Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M109.07,7.94a0.14,0.14,0,0,0,0-.07L108.53,5A0.55,0.55,0,0,0,108,4.52h-1.17a1.19,1.19,0,1,0-.71,0h-1.17a0.55,0.55,0,0,0-.55.46l-0.55,2.89a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V9.43h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V6.2L108,8.12a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,109.07,7.94Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-3\"\n        d=\"M114.82,7.94a0.14,0.14,0,0,0,0-.07L114.28,5a0.55,0.55,0,0,0-.55-0.47h-1.17a1.19,1.19,0,1,0-.71,0h-1.17a0.55,0.55,0,0,0-.55.46L109.6,7.88a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1L111,6.25l0,6.57a0.56,0.56,0,0,0,1.11,0V9.43h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V6.2l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,114.82,7.94Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M86.05,20a0.14,0.14,0,0,0,0-.07L85.51,17A0.55,0.55,0,0,0,85,16.54H83.8a1.19,1.19,0,1,0-.71,0H81.92a0.55,0.55,0,0,0-.55.46L80.83,19.9a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V21.45h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V18.22L85,20.14a0.55,0.55,0,0,0,1.1-.1A0.51,0.51,0,0,0,86.05,20Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M91.81,20a0.14,0.14,0,0,0,0-.07L91.27,17a0.55,0.55,0,0,0-.55-0.47H89.55a1.19,1.19,0,1,0-.71,0H87.68a0.55,0.55,0,0,0-.55.46L86.58,19.9a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1L88,18.27l0,6.57a0.56,0.56,0,0,0,1.11,0V21.45h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V18.22l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,91.81,20Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M97.56,20a0.14,0.14,0,0,0,0-.07L97,17a0.55,0.55,0,0,0-.55-0.47H95.3a1.19,1.19,0,1,0-.71,0H93.43a0.55,0.55,0,0,0-.55.46L92.34,19.9a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V21.45H95v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V18.22l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,97.56,20Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-3\"\n        d=\"M103.31,20a0.14,0.14,0,0,0,0-.07L102.77,17a0.55,0.55,0,0,0-.55-0.47h-1.17a1.19,1.19,0,1,0-.71,0H99.18a0.55,0.55,0,0,0-.55.46L98.09,19.9a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V21.45h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V18.22l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,103.31,20Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M109.07,20a0.14,0.14,0,0,0,0-.07L108.53,17a0.55,0.55,0,0,0-.55-0.47h-1.17a1.19,1.19,0,1,0-.71,0h-1.17a0.55,0.55,0,0,0-.55.46l-0.55,2.89a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V21.45h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V18.22L108,20.14a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,109.07,20Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <path class=\"cls-1\"\n        d=\"M114.82,20a0.14,0.14,0,0,0,0-.07L114.28,17a0.55,0.55,0,0,0-.55-0.47h-1.17a1.19,1.19,0,1,0-.71,0h-1.17a0.55,0.55,0,0,0-.55.46L109.6,19.9a0.14,0.14,0,0,0,0,.07,0.49,0.49,0,0,0,0,.08,0.55,0.55,0,0,0,1.1.1l0.3-1.87,0,6.57a0.56,0.56,0,0,0,1.11,0V21.45h0.13v3.39a0.56,0.56,0,0,0,.56.55,0.63,0.63,0,0,0,.55-0.32V18.22l0.34,1.92a0.55,0.55,0,0,0,1.1-.1A0.5,0.5,0,0,0,114.82,20Z\"\n        transform=\"translate(0 -1.73)\"/>\n  <polygon class=\"cls-2\" points=\"91.54 29.99 91.32 29.99 91.69 29.45 92.03 29.45 91.54 29.99\"/>\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_menu.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg fill=\"#000000\" height=\"36\" viewBox=\"0 0 24 24\" width=\"36\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n  <path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/>\n</svg>\n\n";
  });

this["JST"]["app/scripts/templates/icons/ic_notFound.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg viewBox=\"0 0 24 24\" with=\"24px\" height=\"24px\" fill=\"none\" stroke=\"#CCCCCC\">\n	<polygon  stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"12,0.6 1.5,23.4 22.5,23.4 	\"/>\n	<text transform=\"matrix(1 0 0 1 9.4685 21.1878)\" fill=\"#CCCCCC\" font-family=\"'MyanmarMN'\" font-size=\"17.3977\">!</text>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_organogram_thematic.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800px\" height=\"400px\" viewBox=\"0 0 137 100\">\n<text transform=\"matrix(1 0 0 1 10.4878 64.6427)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">Ch</tspan><tspan x=\"3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"3.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onic diseases</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_1_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_2_\">\n		<use xlink:href=\"#SVGID_1_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"58.9\" clip-path=\"url(#SVGID_2_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 3.6304 46.9376)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">F</tspan><tspan x=\"1.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">om </tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ev</tspan><tspan x=\"8.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">alu</tspan><tspan x=\"12.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"13.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion </tspan><tspan x=\"18.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"19.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o action: epidermiologica</tspan><tspan x=\"47.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"48.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> studies, design and </tspan><tspan x=\"70.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ev</tspan><tspan x=\"73.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">alu</tspan><tspan x=\"76.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"78.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion </tspan><tspan x=\"83.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o</tspan><tspan x=\"84.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"85.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> i</tspan><tspan x=\"86.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"88.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"88.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">er</tspan><tspan x=\"91.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">v</tspan><tspan x=\"92.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"93.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"95.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tions and p</tspan><tspan x=\"107.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"108.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">og</tspan><tspan x=\"111.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"112.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ams, </tspan></text>\n<text transform=\"matrix(1 0 0 1 45.9458 50.1505)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">kn</tspan><tspan x=\"2.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">o</tspan><tspan x=\"4.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">wledge t</tspan><tspan x=\"13.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"14.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ans</tspan><tspan x=\"18.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"19.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"20.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"21.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> and </tspan><tspan x=\"26.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"28.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">oope</tspan><tspan x=\"33.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"34.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"36\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tion</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_3_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_4_\">\n		<use xlink:href=\"#SVGID_3_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"43.2\" clip-path=\"url(#SVGID_4_)\" fill=\"none\" stroke=\"#414141\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"134.3\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 56.8828 62.2559)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">V</tspan><tspan x=\"1.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ulne</tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">able g</tspan><tspan x=\"14\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"14.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">oups</tspan></text>\n<text transform=\"matrix(1 0 0 1 51.6646 65.4698)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">(</tspan><tspan x=\"0.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">child</tspan><tspan x=\"6.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">en, elder</tspan><tspan x=\"16.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"17.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"18.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">, mig</tspan><tspan x=\"23.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"24.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"26\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"27.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ts)</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_5_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_6_\">\n		<use xlink:href=\"#SVGID_5_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"48.8\" y=\"58.9\" clip-path=\"url(#SVGID_6_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n	<rect x=\"48.8\" y=\"79\" clip-path=\"url(#SVGID_6_)\" fill=\"#446CB3\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 52.0874 83.0177)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">A</tspan><tspan x=\"1.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> </tspan><tspan x=\"2.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">f</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ocus on speciﬁc g</tspan><tspan x=\"22.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"23.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">oups </tspan></text>\n<text transform=\"matrix(1 0 0 1 59.229 86.2325)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">and </tspan><tspan x=\"4.9\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">onditions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_7_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_8_\">\n		<use xlink:href=\"#SVGID_7_\"  overflow=\"visible\"/>\n	</clipPath>\n	<rect x=\"48.8\" y=\"6.5\" clip-path=\"url(#SVGID_8_)\" fill=\"#446CB3\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 51.4746 10.6309)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">A</tspan><tspan x=\"1.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> li</tspan><tspan x=\"3.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">f</tspan><tspan x=\"4.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"5.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"6.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ourse perspecti</tspan><tspan x=\"23.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">v</tspan><tspan x=\"25\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e on </tspan></text>\n<text transform=\"matrix(1 0 0 1 55.8741 13.8438)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">health d</tspan><tspan x=\"9.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"10.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">t</tspan><tspan x=\"11.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ermina</tspan><tspan x=\"19.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"20.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ts</tspan></text>\n<text transform=\"matrix(1 0 0 1 104.1641 62.7325)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">I</tspan><tspan x=\"0.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"2.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ectious diseases</tspan></text>\n<text transform=\"matrix(1 0 0 1 110.7481 65.9454)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">(HI</tspan><tspan x=\"3.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">V</tspan><tspan x=\"4.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">,</tspan><tspan x=\"5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> </tspan><tspan x=\"5.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">TB)</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_9_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_10_\">\n		<use xlink:href=\"#SVGID_9_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"96.4\" y=\"58.9\" clip-path=\"url(#SVGID_10_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"39.4\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 111.9121 30.9708)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ealth </tspan><tspan x=\"7.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">s</tspan><tspan x=\"9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"10.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">s</tspan><tspan x=\"11.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">t</tspan><tspan x=\"12.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ems </tspan></text>\n<text transform=\"matrix(1 0 0 1 110.544 34.1827)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">and o</tspan><tspan x=\"6.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"7.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ganiz</tspan><tspan x=\"13.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"14.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_11_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_12_\">\n		<use xlink:href=\"#SVGID_11_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"107.1\" y=\"27.2\" clip-path=\"url(#SVGID_12_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 75.6324 32.8399)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ealt</tspan><tspan x=\"5.9\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">h</tspan><tspan x=\"7.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">y</tspan><tspan x=\"8.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> li</tspan><tspan x=\"10.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">f</tspan><tspan x=\"11.1\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">estyles</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_13_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_14_\">\n		<use xlink:href=\"#SVGID_13_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"71.9\" y=\"27.2\" clip-path=\"url(#SVGID_14_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 40.1094 29.5772)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">O</tspan><tspan x=\"1.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">cup</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">a</tspan><tspan x=\"8.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tiona</tspan><tspan x=\"14.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">l</tspan><tspan x=\"14.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> and</tspan></text>\n<text transform=\"matrix(1 0 0 1 42.0772 32.7901)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">e</tspan><tspan x=\"1.3\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"2.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">vi</tspan><tspan x=\"4.7\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"5.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onme</tspan><tspan x=\"12\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">n</tspan><tspan x=\"13.5\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">tal</tspan></text>\n<text transform=\"matrix(1 0 0 1 45.8184 36.004)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\"> haza</tspan><tspan x=\"5.8\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">r</tspan><tspan x=\"6.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">ds</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_15_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_16_\">\n		<use xlink:href=\"#SVGID_15_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"36.7\" y=\"27.2\" clip-path=\"url(#SVGID_16_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 6.168 30.9708)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">Socioe</tspan><tspan x=\"7.4\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"8.6\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onomic</tspan></text>\n<text transform=\"matrix(1 0 0 1 9.3467 34.1827)\"><tspan x=\"0\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">c</tspan><tspan x=\"1.2\" y=\"0\" fill=\"#231F20\" font-size=\"2.6775\">onditions</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_17_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_18_\">\n		<use xlink:href=\"#SVGID_17_\"  overflow=\"visible\"/>\n	</clipPath>\n	\n		<rect x=\"1.4\" y=\"27.2\" clip-path=\"url(#SVGID_18_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" width=\"28.6\" height=\"9.5\"/>\n	<rect x=\"96.4\" y=\"82.9\" clip-path=\"url(#SVGID_18_)\" fill=\"#414141\" width=\"39.4\" height=\"14.7\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 100.1407 86.338)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Public health g</tspan><tspan x=\"16.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ov</tspan><tspan x=\"19.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ernan</tspan><tspan x=\"25.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"27\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan></text>\n<text transform=\"matrix(1 0 0 1 102.7285 89.5499)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Financing, in</tspan><tspan x=\"14.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">e</tspan><tspan x=\"16.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"18.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ti</tspan><tspan x=\"19.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">v</tspan><tspan x=\"21\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">es,</tspan></text>\n<text transform=\"matrix(1 0 0 1 100.7959 92.7637)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">manageme</tspan><tspan x=\"12.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">n</tspan><tspan x=\"14.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">t, e</tspan><tspan x=\"17.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"18.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">onomic </tspan></text>\n<text transform=\"matrix(1 0 0 1 109.5127 95.9766)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ev</tspan><tspan x=\"2.6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">alu</tspan><tspan x=\"6\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">a</tspan><tspan x=\"7.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tion</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_19_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_20_\">\n		<use xlink:href=\"#SVGID_19_\"  overflow=\"visible\"/>\n	</clipPath>\n	<rect x=\"2.4\" y=\"1.3\" clip-path=\"url(#SVGID_20_)\" fill=\"#414141\" width=\"39.4\" height=\"14.7\"/>\n</g>\n<text transform=\"matrix(1 0 0 1 8.147 4.5343)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">Public health </tspan><tspan x=\"15.1\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"15.9\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">esea</tspan><tspan x=\"21\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"21.8\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ch</tspan></text>\n<text transform=\"matrix(1 0 0 1 10.7784 7.7471)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">H</tspan><tspan x=\"1.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">ealth p</tspan><tspan x=\"9.5\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">r</tspan><tspan x=\"10.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">om</tspan><tspan x=\"14\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">o</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tion, </tspan></text>\n<text transform=\"matrix(1 0 0 1 4.752 10.96)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">epidemiolog</tspan><tspan x=\"14.3\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">y</tspan><tspan x=\"15.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">, o</tspan><tspan x=\"18\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">c</tspan><tspan x=\"19.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">cup</tspan><tspan x=\"23.4\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">a</tspan><tspan x=\"24.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">tional </tspan></text>\n<text transform=\"matrix(1 0 0 1 9.271 14.1739)\"><tspan x=\"0\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">health, globa</tspan><tspan x=\"14.7\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\">l</tspan><tspan x=\"15.2\" y=\"0\" fill=\"#FFFFFF\" font-size=\"2.6775\"> health</tspan></text>\n<g>\n	<defs>\n		<rect id=\"SVGID_21_\" x=\"-25.3\" y=\"-500.1\" width=\"187.8\" height=\"633.1\"/>\n	</defs>\n	<clipPath id=\"SVGID_22_\">\n		<use xlink:href=\"#SVGID_21_\"  overflow=\"visible\"/>\n	</clipPath>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.5,16 \n		68.5,21.1 15.7,21.1 15.7,27.2 	\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.5,16 \n		68.5,21.1 121.2,21.1 121.2,27.2 	\"/>\n	\n		<line clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"51\" y1=\"21.1\" x2=\"51\" y2=\"27.2\"/>\n	\n		<line clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" x1=\"86.2\" y1=\"27.2\" x2=\"86.2\" y2=\"21.1\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"68.3,79 \n		68.3,73.7 68.3,68.4 	\"/>\n	<polyline clip-path=\"url(#SVGID_22_)\" fill=\"none\" stroke=\"#446CB3\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"20.9,68.4 \n		20.9,73.7 68.3,73.7 116.1,73.7 116.1,68.4 	\"/>\n	<polygon clip-path=\"url(#SVGID_22_)\" fill=\"#414141\" points=\"71.1,41.6 68.5,39 65.8,41.6 	\"/>\n	<polygon clip-path=\"url(#SVGID_22_)\" fill=\"#414141\" points=\"65.8,54.3 68.5,57 71.1,54.3 	\"/>\n</g>\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_pause.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M14,19.14H18V5.14H14M6,19.14H10V5.14H6V19.14Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_phone.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/icons/ic_pin.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n	<path d=\"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z\" />\n</svg>\n";
  });

this["JST"]["app/scripts/templates/icons/ic_search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" fill=\"#000000\">\n    <path d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\n</svg>";
  });

this["JST"]["app/scripts/templates/members/associatedList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/scripts/templates/members/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"member__detail__column__email\">\n				<span>EMAIL:</span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n			</div>\n		";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"member__detail__column__orcid\">\n				<span>ORCID:</span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_orcid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n			</div>\n		";
  return buffer;
  }

  buffer += "<a href=\"#membros\" class=\"member__detail__close\" id=\"detail-close\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_close", options) : helperMissing.call(depth0, "view", "icons/ic_close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n<div class=\"member__detail__wrapper\">\n	<section class=\"member__detail__column member__detail__column--person\">\n		<div class=\"member__detail__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"> </div>\n\n		<h2 class=\"member__detail__name\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</section>\n\n	<section class=\"member__detail__column member__detail__column--info\">\n		<p>";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_email), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.custom_fields)),stack1 == null || stack1 === false ? stack1 : stack1.member_email), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</section>\n\n	<section class=\"member__detail__column member__detail__column--details\" id=\"member-publications\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</section>\n\n	<section class=\"member__detail__column member__detail__column--details\" id=\"member-projects\">\n	";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/effectiveList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/scripts/templates/members/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h3 class=\"post-list__title\">Membros Efetivos</h3>\n<div id=\"effective-list\">\n	<div id=\"members-effective\" class=\"post-list__members__effective\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</div>\n\n<h3 class=\"post-list__title post-list__title--associated\">Membros Associados</h3>\n<div id=\"members-associated\" class=\"post-list__members__associated\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "components/spinner", options) : helperMissing.call(depth0, "view", "components/spinner", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#membros/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	<div class=\"post-list__member__thumbnail\" \n	style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n	</div>\n\n	<section class=\"post-list__member__content\">\n		\n\n		<h2 class=\"post-list__member__content__name\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</section>\n</a>";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberProject.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"member__detail__article\">\n	\n	\n	<h5 class=\"member__detail__article__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n	<div class=\"member__detail__article__text\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</article>";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberProjects.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<article class=\"member__detail__article\">\n	<p>Sem publicações para apresentar</p>\n</article>\n";
  }

  buffer += "<h2 class=\"member__detail__article__title\">PROJETOS</h2>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberPublication.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"member__detail__article\">\n	\n	\n	<h5 class=\"member__detail__article__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n	<div class=\"member__detail__article__text\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</article>";
  return buffer;
  });

this["JST"]["app/scripts/templates/members/memberPublications.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<article class=\"member__detail__article\">\n	<p>Sem publicações para apresentar</p>\n</article>\n";
  }

  buffer += "<h2 class=\"member__detail__article__title\">PUBLICAÇÔES</h2>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["app/scripts/templates/news/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#noticias\" class=\"close\">+</a>\n<div class=\"event__detail__wrapper\">\n	<section class=\"event__detail__column\">\n		<div class=\"post__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<!-- <time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time> -->\n		</div>\n\n		<h2 class=\"event__detail__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</section>\n	<section class=\"event__detail__column\">\n\n		<div class=\"content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/news/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n<div class=\"post-list__header__no-content\">\n\n	<p>Pedimos desculpa, não foram encontrados resultados.</p>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n";
  }

  buffer += "<div class=\"post-list__header\">\n	<div class=\"post-list__header__title\"></div>\n\n	<div class=\"post-list__header__search\">\n		<input id=\"post-list-search\" type=\"text\" placeholder=\"Pesquisar\">\n		<button id=\"news-search-button\" class=\"hidden\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_search", options) : helperMissing.call(depth0, "view", "icons/ic_search", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	</div>\n</div>\n\n<div id=\"post-list-container\" class=\"post-list__container\">\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "===", 0, options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "===", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/news/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<div class=\"post-list__new__thumbnail\"\nstyle=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\n\n	<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__thumbnail__date\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time>\n</div>\n\n<section class=\"post-list__new__content\">\n	\n\n	<h2 class=\"post-list__new__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n	<div class=\"post-list__new__content__text\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n    <a href=\"#noticias/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post-list__new__content__button\">";
  stack1 = (helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "icons/ic_arrow-right", options) : helperMissing.call(depth0, "view", "icons/ic_arrow-right", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Saber mais</a>\n</section>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/posts/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"detail__thumbnail\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1.full)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\">\n	<div class=\"detail__thumbnail__wrapper\">\n		<h1 class=\"detail__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n	</div>\n</div>\n\n<div class=\"detail__category-wrapper\">\n	<div class=\"post__category\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</div>\n\n<div class=\"post__content__details\">\n	<a href=\"#\" class=\"post__content__details__author\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nickname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n\n	<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__details__date\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n\n	<a href=\"#\" class=\"post__content__details__social\">56 partilhas</a>\n</div>\n\n<div id=\"excerpt\" class=\"detail__excerpt\">\n	<div class=\"detail__excerpt__wrapper\">\n		";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/posts/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>this is post index view</p>";
  });

this["JST"]["app/scripts/templates/posts/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\"";
  return buffer;
  }

  buffer += "<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__thumbnail\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.inCache), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n\n<section class=\"post__content\">\n	<section class=\"post__content__details\">\n		<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__details__date\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</time>\n	</section>\n\n	<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n	<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__excerpt\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n\n	<section class=\"post__content__details bottom\">\n		<a href=\"#\" class=\"post__content__details__author\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nickname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n	</section>\n</section>\n\n<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"post__category\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/projects/detail.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#projetos\" class=\"close\">+</a>\n<div class=\"project__detail__wrapper\">\n	<section class=\"project__detail__column\">\n		<div class=\"post__thumbnail\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\" alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			\n		</div>\n\n		<h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n		<h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n	</section>\n	<section class=\"project__detail__column\">\n\n		<div class=\"content\">";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</section>\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/projects/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n";
  }

  buffer += "<div id=\"projects-container\" class=\"projects-container\"></div>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.length), "<", (depth0 && depth0.totalPosts), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/projects/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\"";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.thumbnail_images)),stack1 == null || stack1 === false ? stack1 : stack1['post-thumbnail'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program4(depth0,data) {
  
  
  return "images/default_thumbnail.png";
  }

  buffer += "<a href=\"#projetos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__thumbnail\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.inCache), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " alt=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></a>\n\n<section class=\"post__content\">\n	\n\n	<a href=\"#\" class=\"post__content__author\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nickname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n\n	<div class=\"post__content__title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	<div class=\"post__content__excerpt\">";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	<a href=\"#projetos/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"post__content__btn\">mais</a>\n\n</section>\n\n<a href=\"#projetos\" class=\"post__category\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.categories)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/publications/filters.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"tab\">Pesquisar por Autor</div>\n\n<select name=\"authors-list\" id=\"authors-list\" class=\"dropdown\">\n	<option value=\"all\" selected=\"selected\">todos</option>\n</select>\n<div id=\"search\" class=\"search\">Pesquisar</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/publications/filtersitem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  });

this["JST"]["app/scripts/templates/publications/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"post-list__header__title\"></div>\n<div id=\"publications-filter\" class=\"publications-filter\">\n	\n</div>\n<div id=\"publications-container\" class=\"publications-container\"></div>\n\n\n<div id=\"load-more-posts\" class=\"load-more\">MAIS</div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/publications/item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"home__section__publication__content\">\n	<div class=\"publication__item\">\n		<div class=\"publication__item__column\">\n			<h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n			<p>";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n			\n			<time datetime=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.prettyDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prettyDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</time>\n		</div>\n		\n	</div>\n</div>\n";
  return buffer;
  });

return this["JST"];

});