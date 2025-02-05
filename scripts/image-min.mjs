import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const main = async () => {
    const files = await imagemin(['assets/images/**/*.{jpg,png}'], {
        destination: 'assets/images/',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log(files);
}

main();