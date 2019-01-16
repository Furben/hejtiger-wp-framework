<header>
            <div class="container">
                <h1><?php bloginfo('name'); ?></h1>
                <nav>
                    <?php
                    wp_nav_menu (
                    array(
                    'theme_location'  => 'main-menu',
                    'menu_class'      => 'hovedmenu',
                    'container'       => 'false'
                    )
                    );
                    ?>
                </nav>
            </div><!--container-->
        </header>