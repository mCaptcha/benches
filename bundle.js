(()=>{"use strict";var e=new Worker("bench.js"),n=[],t=document.getElementById("stats");document.getElementById("start").addEventListener("click",(function(d){return function(d){d.preventDefault(),document.getElementById("pre-bench").style.display="none",document.getElementById("bench").style.display="flex";var r=document.getElementById("counter");r.innerText="9 more to go",e.onmessage=function(e){!function(e){var d=document.createElement("tr");d.className="data";var r=document.createElement("td");r.innerHTML=e.difficulty.toString();var a=document.createElement("td");a.innerHTML=e.time.toString(),d.appendChild(r),d.appendChild(a),t.appendChild(d),n.push(e)}(e.data),9==n.length?(document.getElementById("status").innerHTML="Benchmark finished",r.innerText="All Done!"):r.innerText=9-n.length+" more to go"};for(var a=1;a<=9;a++){var o=5e5*a;e.postMessage(o)}!function(){var e={threads:window.navigator.hardwareConcurrency,oscup:window.navigator.userAgent};console.log(n),console.log(e);var t=document.createElement("div"),d=document.createElement("b");d.innerText="User Agent: ";var r=document.createTextNode(""+e.oscup),a=document.createElement("b");a.innerText="Hardware concurrency: ";var o=document.createTextNode(""+e.threads);t.appendChild(d),t.appendChild(r),t.appendChild(document.createElement("br")),t.appendChild(a),t.appendChild(o),document.getElementById("device-info").appendChild(t)}()}(d)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFZQSxJQUNNQSxFQUFTLElBQUlDLE9BQU8sWUFDcEJDLEVBQW1CLEdBQ25CQyxFQUFRQyxTQUFTQyxlQUFlLFNBK0V0Q0QsU0FBU0MsZUFBZSxTQUFTQyxpQkFBaUIsU0FBUyxTQUFBQyxHQUFLLE9BN0JwRCxTQUFDQSxHQUNYQSxFQUFFQyxpQkFDRkosU0FBU0MsZUFBZSxhQUFhSSxNQUFNQyxRQUFVLE9BQ3JETixTQUFTQyxlQUFlLFNBQVNJLE1BQU1DLFFBQVUsT0FFakQsSUFFTUMsRUFBaUJQLFNBQVNDLGVBQWUsV0FDL0NNLEVBQWVDLFVBQWVDLGVBRTlCYixFQUFPYyxVQUFZLFNBQUNDLElBMURKLFNBQUNDLEdBQ2pCLElBQU1DLEVBQU1iLFNBQVNjLGNBQWMsTUFDbkNELEVBQUlFLFVBQVksT0FDaEIsSUFBTUMsRUFBT2hCLFNBQVNjLGNBQWMsTUFDcENFLEVBQUtDLFVBQVlMLEVBQUtNLFdBQVdDLFdBQ2pDLElBQU1DLEVBQVdwQixTQUFTYyxjQUFjLE1BQ3hDTSxFQUFTSCxVQUFZTCxFQUFLUyxLQUFLRixXQUUvQk4sRUFBSVMsWUFBWU4sR0FDaEJILEVBQUlTLFlBQVlGLEdBRWhCckIsRUFBTXVCLFlBQVlULEdBRWxCZixFQUFJeUIsS0FBS1gsR0ErQ1BZLENBRGlCYixFQUFNYyxNQU5OLEdBUWIzQixFQUFJNEIsUUFqQkExQixTQUFTQyxlQUFlLFVBQ2hDZ0IsVUFBWSxxQkFrQlZWLEVBQWVDLFVBQVksYUFFM0JELEVBQWVDLFVBWkEsRUFZNEJWLEVBQUk0QixPQUFNLGVBSXpELElBQUssSUFBSUMsRUFBSSxFQUFHQSxHQWhCRyxFQWdCY0EsSUFBSyxDQUNwQyxJQUFJQyxFQTNFTyxJQTJFYUQsRUFDeEIvQixFQUFPaUMsWUFBWUQsSUF2REQsV0FDcEIsSUFBTUUsRUFBTyxDQUNYQyxRQUFTQyxPQUFPQyxVQUFVQyxvQkFDMUJDLE1BQU9ILE9BQU9DLFVBQVVHLFdBRzFCQyxRQUFRQyxJQUFJeEMsR0FDWnVDLFFBQVFDLElBQUlSLEdBRVosSUFBTVMsRUFBVXZDLFNBQVNjLGNBQWMsT0FDakMwQixFQUFLeEMsU0FBU2MsY0FBYyxLQUNsQzBCLEVBQUdoQyxVQUFZLGVBQ2YsSUFBTWlDLEVBQUt6QyxTQUFTMEMsZUFBZSxHQUFHWixFQUFLSyxPQUVyQ0osRUFBVS9CLFNBQVNjLGNBQWMsS0FDdkNpQixFQUFRdkIsVUFBWSx5QkFDcEIsSUFBTW1DLEVBQWMzQyxTQUFTMEMsZUFBZSxHQUFHWixFQUFLQyxTQUVwRFEsRUFBUWpCLFlBQVlrQixHQUNwQkQsRUFBUWpCLFlBQVltQixHQUNwQkYsRUFBUWpCLFlBQVl0QixTQUFTYyxjQUFjLE9BQzNDeUIsRUFBUWpCLFlBQVlTLEdBQ3BCUSxFQUFRakIsWUFBWXFCLEdBRXBCM0MsU0FBU0MsZUFBZSxlQUFlcUIsWUFBWWlCLEdBa0NuREssR0FHOERDLENBQUkxQyxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVuY2hlcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbUNhcHRjaGEgaXMgYSBQb1cgYmFzZWQgRG9TIHByb3RlY3Rpb24gc29mdHdhcmUuXG4gKiBUaGlzIGlzIHRoZSBmcm9udGVuZCB3ZWIgY29tcG9uZW50IG9mIHRoZSBtQ2FwdGNoYSBzeXN0ZW1cbiAqIENvcHlyaWdodCDCqSAyMDIxIEFyYXZpbnRoIE1hbml2bmFuYW4gPHJlYWxhcmF2aW50aEBiYXRzZW5zZS5uZXQ+LlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IEFwYWNoZSAyLjAgb3IgTUlUIGxpY2Vuc2UuXG4gKiBZb3Ugc2hvdWQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgTUlUIGFuZCBBcGFjaGUgMi4wIGFsb25nIHdpdGhcbiAqIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvTUlULmh0bWw+IGZvclxuICogTUlUIG9yIDxodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjA+IGZvciBBcGFjaGUuXG4gKi9cbmltcG9ydCB7UGVyZn0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IEZBQ1RPUiA9IDUwMDAwMDtcbmNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoJ2JlbmNoLmpzJyk7XG5jb25zdCByZXM6IEFycmF5PFBlcmY+ID0gW107XG5jb25zdCBzdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0cycpO1xuXG5jb25zdCBhZGRSZXN1bHQgPSAocGVyZjogUGVyZikgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICByb3cuY2xhc3NOYW1lID0gJ2RhdGEnO1xuICBjb25zdCBkaWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgZGlmZi5pbm5lckhUTUwgPSBwZXJmLmRpZmZpY3VsdHkudG9TdHJpbmcoKTtcbiAgY29uc3QgZHVyYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBkdXJhdGlvbi5pbm5lckhUTUwgPSBwZXJmLnRpbWUudG9TdHJpbmcoKTtcblxuICByb3cuYXBwZW5kQ2hpbGQoZGlmZik7XG4gIHJvdy5hcHBlbmRDaGlsZChkdXJhdGlvbik7XG5cbiAgc3RhdHMuYXBwZW5kQ2hpbGQocm93KTtcblxuICByZXMucHVzaChwZXJmKTtcbn07XG5cbmNvbnN0IGFkZERldmljZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IElORk8gPSB7XG4gICAgdGhyZWFkczogd2luZG93Lm5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5LFxuICAgIG9zY3VwOiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgfTtcblxuICBjb25zb2xlLmxvZyhyZXMpO1xuICBjb25zb2xlLmxvZyhJTkZPKTtcblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICB1YS5pbm5lclRleHQgPSAnVXNlciBBZ2VudDogJztcbiAgY29uc3Qgb3MgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtJTkZPLm9zY3VwfWApO1xuXG4gIGNvbnN0IHRocmVhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gIHRocmVhZHMuaW5uZXJUZXh0ID0gJ0hhcmR3YXJlIGNvbmN1cnJlbmN5OiAnO1xuICBjb25zdCB0aHJlYWRzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke0lORk8udGhyZWFkc31gKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKHVhKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChvcyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhyZWFkcyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhyZWFkc1RleHQpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZpY2UtaW5mbycpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufTtcblxuY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG4gIHMuaW5uZXJIVE1MID0gJ0JlbmNobWFyayBmaW5pc2hlZCc7XG59O1xuXG5jb25zdCBydW4gPSAoZTogRXZlbnQpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlLWJlbmNoJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlbmNoJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICBjb25zdCBpdGVyYXRpb25zID0gOTtcblxuICBjb25zdCBjb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyJyk7XG4gIGNvdW50ZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke2l0ZXJhdGlvbnN9IG1vcmUgdG8gZ29gO1xuXG4gIHdvcmtlci5vbm1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgIGxldCBkYXRhOiBQZXJmID0gZXZlbnQuZGF0YTtcbiAgICBhZGRSZXN1bHQoZGF0YSk7XG4gICAgaWYgKHJlcy5sZW5ndGggPT0gaXRlcmF0aW9ucykge1xuICAgICAgZmluaXNoZWQoKTtcbiAgICAgIGNvdW50ZXJFbGVtZW50LmlubmVyVGV4dCA9IGBBbGwgRG9uZSFgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudGVyRWxlbWVudC5pbm5lclRleHQgPSBgJHtpdGVyYXRpb25zIC0gcmVzLmxlbmd0aH0gbW9yZSB0byBnb2A7XG4gICAgfVxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgIGxldCBkaWZmaWN1bHR5X2ZhY3RvciA9IGkgKiBGQUNUT1I7XG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKGRpZmZpY3VsdHlfZmFjdG9yKTtcbiAgfVxuXG4gIGFkZERldmljZUluZm8oKTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBydW4oZSkpO1xuIl0sIm5hbWVzIjpbIndvcmtlciIsIldvcmtlciIsInJlcyIsInN0YXRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb3VudGVyRWxlbWVudCIsImlubmVyVGV4dCIsIml0ZXJhdGlvbnMiLCJvbm1lc3NhZ2UiLCJldmVudCIsInBlcmYiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGlmZiIsImlubmVySFRNTCIsImRpZmZpY3VsdHkiLCJ0b1N0cmluZyIsImR1cmF0aW9uIiwidGltZSIsImFwcGVuZENoaWxkIiwicHVzaCIsImFkZFJlc3VsdCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZGlmZmljdWx0eV9mYWN0b3IiLCJwb3N0TWVzc2FnZSIsIklORk8iLCJ0aHJlYWRzIiwid2luZG93IiwibmF2aWdhdG9yIiwiaGFyZHdhcmVDb25jdXJyZW5jeSIsIm9zY3VwIiwidXNlckFnZW50IiwiY29uc29sZSIsImxvZyIsImVsZW1lbnQiLCJ1YSIsIm9zIiwiY3JlYXRlVGV4dE5vZGUiLCJ0aHJlYWRzVGV4dCIsImFkZERldmljZUluZm8iLCJydW4iXSwic291cmNlUm9vdCI6IiJ9