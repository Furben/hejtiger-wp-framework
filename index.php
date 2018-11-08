<?php get_header(); ?>

<h1>COME ON!!!!!!</h1>



        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <article>
                <h2><?php the_title(); ?></h2>
                <p><?php the_author(); ?> | 
                    <?php echo the_time('j F Y') ?> -
                    <?php the_category(', ') ?>
                </p>
                <?php the_excerpt(); ?>
                <hr>
            </article>
        <!-- post -->
        <?php endwhile; ?>
        <!-- post navigation -->
        <?php else: ?>
            <div class="page-header">
                <h2>Hmmmm!</h2>
            </div>
            <p>Fandt ikke hvad ud søgte.</p>
        <!-- no posts found -->
        <?php endif; ?>


<?php get_sidebar(); ?>
<?php get_footer(); ?>