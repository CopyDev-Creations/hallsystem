import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
    const data = await req.json();
    const { formData } = data;
    const { rodzaj, szerokosc, dlugosc, wysokosc, material, drzwi, bramy, okna, wojewodztwo_inw, miejscowosc_inw, montaz, strefa, email, telefon, wojewodztwo, miejscowosc, komentarz } = formData;

    let message = "<h1>Formularz</h1>";
    if (rodzaj !== "") message += `<p><b>Rodzaj:</b> ${rodzaj}</p>`;
    message += `<p><b>Szerokość:</b> ${szerokosc}m</p>`;
    message += `<p><b>Długość:</b> ${dlugosc}m</p>`;
    message += `<p><b>Wysokość:</b> ${wysokosc}m</p>`;
    message += `<p><b>Materiał ścian:</b> ${material}</p>`;
    if (drzwi !== 0) message += `<p><b>Liczba drzwi:</b> ${drzwi}</p>`;
    if (bramy !== 0) message += `<p><b>Liczba bram przemysłowych:</b> ${bramy}</p>`;
    if (okna !== 0) message += `<p><b>Liczba okien:</b> ${okna}</p>`;
    if (wojewodztwo_inw !== "") message += `<p><b>Województwo inwestycji:</b> ${wojewodztwo_inw}</p>`;
    if (miejscowosc_inw !== "") message += `<p><b>Miejscowość inwestycji:</b> ${miejscowosc_inw}</p>`;
    message += `<p><b>Potrzeba montażu:</b> ${montaz ? "TAK" : "NIE"}</p>`;
    if (strefa !== 0) message += `<p><b>Strefa obciążenia śniegiem:</b> ${strefa}</p>`;
    message += `<p><b>Adres e-mail:</b> ${email}</p>`;
    message += `<p><b>Numer telefonu:</b> ${telefon}</p>`;
    if (wojewodztwo !== "") message += `<p><b>Województwo:</b> ${wojewodztwo}</p>`;
    if (miejscowosc !== "") message += `<p><b>Miejscowość:</b> ${miejscowosc}</p>`;
    if (komentarz !== "") message += `<p><b>Komentarz:</b> ${komentarz}</p>`;

    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_FROM,
                pass: process.env.MAIL_PASS
            }
        });

        var mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: `Wiadomość od: ${email}`,
            html: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                return NextResponse.json('Email sent');
            }
        });
        return NextResponse.json(formData);
    } catch (error) {
        console.log(error);
    }
    return NextResponse.json(`Unable to send email`, { status: 500 });
}