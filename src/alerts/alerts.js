import swal from 'sweetalert';

const warningSweetAlert = ()=> {
    return swal({
        title: "Divide by 0 is an error",
        text: "It isn't possible to divide by 0. The result allways will be 0, try with another number",
        icon: "warning",
        dangerMode: true,
        timer: 5000,
      })

}
export default warningSweetAlert;