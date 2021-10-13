(()=>{"use strict";var e=new Worker("bench.js"),n=[],t=document.getElementById("stats");document.getElementById("start").addEventListener("click",(function(d){return function(d){d.preventDefault(),document.getElementById("pre-bench").style.display="none",document.getElementById("bench").style.display="flex";var r=document.getElementById("counter");r.innerText="9 more to go",e.onmessage=function(e){!function(e){var d=document.createElement("tr");d.className="data";var r=document.createElement("td");r.innerHTML=e.difficulty.toString();var a=document.createElement("td");a.innerHTML=e.time.toString(),d.appendChild(r),d.appendChild(a),t.appendChild(d),n.push(e)}(e.data),9==n.length?(document.getElementById("status").innerHTML="Benchmark finished",r.innerText="All Done!"):r.innerText=9-n.length+" more to go"};for(var a=1;a<=9;a++){var o=5e5*a;e.postMessage(o)}!function(){var e={threads:window.navigator.hardwareConcurrency,oscup:window.navigator.userAgent};console.log(n),console.log(e);var t=document.createElement("div"),d=document.createElement("b");d.innerText="User Agent: ";var r=document.createTextNode(""+e.oscup),a=document.createElement("b");a.innerText="Hardware concurrency: ";var o=document.createTextNode(""+e.threads);t.appendChild(d),t.appendChild(r),t.appendChild(document.createElement("br")),t.appendChild(a),t.appendChild(o),document.getElementById("device-info").appendChild(t)}()}(d)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFZQSxJQUNNQSxFQUFTLElBQUlDLE9BQU8sWUFDcEJDLEVBQW1CLEdBQ25CQyxFQUFRQyxTQUFTQyxlQUFlLFNBK0V0Q0QsU0FBU0MsZUFBZSxTQUFTQyxpQkFBaUIsU0FBUyxTQUFDQyxHQUFNLE9BN0J0RCxTQUFDQSxHQUNYQSxFQUFFQyxpQkFDRkosU0FBU0MsZUFBZSxhQUFhSSxNQUFNQyxRQUFVLE9BQ3JETixTQUFTQyxlQUFlLFNBQVNJLE1BQU1DLFFBQVUsT0FFakQsSUFFTUMsRUFBaUJQLFNBQVNDLGVBQWUsV0FDL0NNLEVBQWVDLFVBQWVDLGVBRTlCYixFQUFPYyxVQUFZLFNBQUNDLElBMURKLFNBQUNDLEdBQ2pCLElBQU1DLEVBQU1iLFNBQVNjLGNBQWMsTUFDbkNELEVBQUlFLFVBQVksT0FDaEIsSUFBTUMsRUFBT2hCLFNBQVNjLGNBQWMsTUFDcENFLEVBQUtDLFVBQVlMLEVBQUtNLFdBQVdDLFdBQ2pDLElBQU1DLEVBQVdwQixTQUFTYyxjQUFjLE1BQ3hDTSxFQUFTSCxVQUFZTCxFQUFLUyxLQUFLRixXQUUvQk4sRUFBSVMsWUFBWU4sR0FDaEJILEVBQUlTLFlBQVlGLEdBRWhCckIsRUFBTXVCLFlBQVlULEdBRWxCZixFQUFJeUIsS0FBS1gsR0ErQ1BZLENBRG1CYixFQUFNYyxNQU5SLEdBUWIzQixFQUFJNEIsUUFqQkExQixTQUFTQyxlQUFlLFVBQ2hDZ0IsVUFBWSxxQkFrQlZWLEVBQWVDLFVBQVksYUFFM0JELEVBQWVDLFVBWkEsRUFZNEJWLEVBQUk0QixPQUFNLGVBSXpELElBQUssSUFBSUMsRUFBSSxFQUFHQSxHQWhCRyxFQWdCY0EsSUFBSyxDQUNwQyxJQUFNQyxFQTNFSyxJQTJFZUQsRUFDMUIvQixFQUFPaUMsWUFBWUQsSUF2REQsV0FDcEIsSUFBTUUsRUFBTyxDQUNYQyxRQUFTQyxPQUFPQyxVQUFVQyxvQkFDMUJDLE1BQU9ILE9BQU9DLFVBQVVHLFdBRzFCQyxRQUFRQyxJQUFJeEMsR0FDWnVDLFFBQVFDLElBQUlSLEdBRVosSUFBTVMsRUFBVXZDLFNBQVNjLGNBQWMsT0FDakMwQixFQUFLeEMsU0FBU2MsY0FBYyxLQUNsQzBCLEVBQUdoQyxVQUFZLGVBQ2YsSUFBTWlDLEVBQUt6QyxTQUFTMEMsZUFBZSxHQUFHWixFQUFLSyxPQUVyQ0osRUFBVS9CLFNBQVNjLGNBQWMsS0FDdkNpQixFQUFRdkIsVUFBWSx5QkFDcEIsSUFBTW1DLEVBQWMzQyxTQUFTMEMsZUFBZSxHQUFHWixFQUFLQyxTQUVwRFEsRUFBUWpCLFlBQVlrQixHQUNwQkQsRUFBUWpCLFlBQVltQixHQUNwQkYsRUFBUWpCLFlBQVl0QixTQUFTYyxjQUFjLE9BQzNDeUIsRUFBUWpCLFlBQVlTLEdBQ3BCUSxFQUFRakIsWUFBWXFCLEdBRXBCM0MsU0FBU0MsZUFBZSxlQUFlcUIsWUFBWWlCLEdBa0NuREssR0FHZ0VDLENBQUkxQyxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVuY2hlcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbUNhcHRjaGEgaXMgYSBQb1cgYmFzZWQgRG9TIHByb3RlY3Rpb24gc29mdHdhcmUuXG4gKiBUaGlzIGlzIHRoZSBmcm9udGVuZCB3ZWIgY29tcG9uZW50IG9mIHRoZSBtQ2FwdGNoYSBzeXN0ZW1cbiAqIENvcHlyaWdodCDCqSAyMDIxIEFyYXZpbnRoIE1hbml2bmFuYW4gPHJlYWxhcmF2aW50aEBiYXRzZW5zZS5uZXQ+LlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IEFwYWNoZSAyLjAgb3IgTUlUIGxpY2Vuc2UuXG4gKiBZb3Ugc2hvdWQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgTUlUIGFuZCBBcGFjaGUgMi4wIGFsb25nIHdpdGhcbiAqIHRoaXMgcHJvZ3JhbS4gSWYgbm90LCBzZWUgPGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvTUlULmh0bWw+IGZvclxuICogTUlUIG9yIDxodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjA+IGZvciBBcGFjaGUuXG4gKi9cbmltcG9ydCB7IFBlcmYgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBGQUNUT1IgPSA1MDAwMDA7XG5jb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKFwiYmVuY2guanNcIik7XG5jb25zdCByZXM6IEFycmF5PFBlcmY+ID0gW107XG5jb25zdCBzdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHNcIik7XG5cbmNvbnN0IGFkZFJlc3VsdCA9IChwZXJmOiBQZXJmKSA9PiB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgcm93LmNsYXNzTmFtZSA9IFwiZGF0YVwiO1xuICBjb25zdCBkaWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICBkaWZmLmlubmVySFRNTCA9IHBlcmYuZGlmZmljdWx0eS50b1N0cmluZygpO1xuICBjb25zdCBkdXJhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgZHVyYXRpb24uaW5uZXJIVE1MID0gcGVyZi50aW1lLnRvU3RyaW5nKCk7XG5cbiAgcm93LmFwcGVuZENoaWxkKGRpZmYpO1xuICByb3cuYXBwZW5kQ2hpbGQoZHVyYXRpb24pO1xuXG4gIHN0YXRzLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgcmVzLnB1c2gocGVyZik7XG59O1xuXG5jb25zdCBhZGREZXZpY2VJbmZvID0gKCkgPT4ge1xuICBjb25zdCBJTkZPID0ge1xuICAgIHRocmVhZHM6IHdpbmRvdy5uYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSxcbiAgICBvc2N1cDogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXG4gIH07XG5cbiAgY29uc29sZS5sb2cocmVzKTtcbiAgY29uc29sZS5sb2coSU5GTyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XG4gIHVhLmlubmVyVGV4dCA9IFwiVXNlciBBZ2VudDogXCI7XG4gIGNvbnN0IG9zID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7SU5GTy5vc2N1cH1gKTtcblxuICBjb25zdCB0aHJlYWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XG4gIHRocmVhZHMuaW5uZXJUZXh0ID0gXCJIYXJkd2FyZSBjb25jdXJyZW5jeTogXCI7XG4gIGNvbnN0IHRocmVhZHNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7SU5GTy50aHJlYWRzfWApO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodWEpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKG9zKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRocmVhZHMpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRocmVhZHNUZXh0KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZS1pbmZvXCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufTtcblxuY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKTtcbiAgcy5pbm5lckhUTUwgPSBcIkJlbmNobWFyayBmaW5pc2hlZFwiO1xufTtcblxuY29uc3QgcnVuID0gKGU6IEV2ZW50KSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmUtYmVuY2hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlbmNoXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICBjb25zdCBpdGVyYXRpb25zID0gOTtcblxuICBjb25zdCBjb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRlclwiKTtcbiAgY291bnRlckVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7aXRlcmF0aW9uc30gbW9yZSB0byBnb2A7XG5cbiAgd29ya2VyLm9ubWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgZGF0YTogUGVyZiA9IGV2ZW50LmRhdGE7XG4gICAgYWRkUmVzdWx0KGRhdGEpO1xuICAgIGlmIChyZXMubGVuZ3RoID09IGl0ZXJhdGlvbnMpIHtcbiAgICAgIGZpbmlzaGVkKCk7XG4gICAgICBjb3VudGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFsbCBEb25lIVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudGVyRWxlbWVudC5pbm5lclRleHQgPSBgJHtpdGVyYXRpb25zIC0gcmVzLmxlbmd0aH0gbW9yZSB0byBnb2A7XG4gICAgfVxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGl0ZXJhdGlvbnM7IGkrKykge1xuICAgIGNvbnN0IGRpZmZpY3VsdHlfZmFjdG9yID0gaSAqIEZBQ1RPUjtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZGlmZmljdWx0eV9mYWN0b3IpO1xuICB9XG5cbiAgYWRkRGV2aWNlSW5mbygpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHJ1bihlKSk7XG4iXSwibmFtZXMiOlsid29ya2VyIiwiV29ya2VyIiwicmVzIiwic3RhdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSIsImNvdW50ZXJFbGVtZW50IiwiaW5uZXJUZXh0IiwiaXRlcmF0aW9ucyIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGVyZiIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkaWZmIiwiaW5uZXJIVE1MIiwiZGlmZmljdWx0eSIsInRvU3RyaW5nIiwiZHVyYXRpb24iLCJ0aW1lIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiYWRkUmVzdWx0IiwiZGF0YSIsImxlbmd0aCIsImkiLCJkaWZmaWN1bHR5X2ZhY3RvciIsInBvc3RNZXNzYWdlIiwiSU5GTyIsInRocmVhZHMiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJoYXJkd2FyZUNvbmN1cnJlbmN5Iiwib3NjdXAiLCJ1c2VyQWdlbnQiLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsInVhIiwib3MiLCJjcmVhdGVUZXh0Tm9kZSIsInRocmVhZHNUZXh0IiwiYWRkRGV2aWNlSW5mbyIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=