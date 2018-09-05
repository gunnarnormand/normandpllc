
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div id="wrapper">
      <!-- nav start -->
			<div class="navbar-fixed">
				<nav>
					<div class="nav-wrapper">
            <a href="#" data-target="slide-out" class="sidenav-trigger left">
  				    <div class="bar top"></div>
  				    <div class="bar middle"></div>
  					  <div class="bar bottom"></div>
						</a>
            <?php
  						wp_nav_menu(array(
  							'menu' => 'full-width-left-nav',
  							'container' => '',
  							'menu_class' => 'left hide-on-med-and-down'
  						));
					  ?>
						<a href="#" id="nav-logo" class="brand-logo center home"><img class="logo responsive-img" src="<?php echo get_field('logo', 'option') ?>" alt="logo"></a>
						<?php
  						wp_nav_menu(array(
  							'menu' => 'full-width-right-nav',
  							'container' => '',
  							'menu_class' => 'right hide-on-med-and-down'
  						));
					  ?>
						<ul id="slide-out" class="sidenav">
							<h4 class="side-nav-logo">
								<img id="sidenavLogo" class="logo" src="<?php echo get_field('secondary_logo', 'option') ?>" alt="logo">
							</h4>
              <?php
  							wp_nav_menu(array(
  								'menu' => 'slide-out-nav',
  								'container' => '',
  								'items_wrap' => '%3$s'
  							));
						  ?>
							<div class="container">
								<div class="row social-icon-row">
									<div class="col s3">
										<a class="social-icon facebook" href="https://www.facebook.com/normandlawpllc/" target="_blank"></a>
									</div>
									<div class="col s3">
										<a class="social-icon linkedin" href="https://www.linkedin.com/in/ednormand/" target="_blank"></a>
									</div>
									<div class="col s3">
										<a class="social-icon twitter" href="https://twitter.com/normandlawpllc/" target="_blank"></a>
									</div>
								</div>
							</div>
						</ul>
					</div>
				</nav>
			</div>
			<!-- nav end -->
