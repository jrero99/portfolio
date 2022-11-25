const Footer = () => {
    var currenTime = new Date()
    const currentYear = currenTime.getFullYear()
    return (
        <footer class="text-xs font-medium text-center uppercase py-5">© {currentYear} All rights reserved</footer>
    )
}
export default Footer