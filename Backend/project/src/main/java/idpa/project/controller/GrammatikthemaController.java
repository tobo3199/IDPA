package idpa.project.controller;

import idpa.project.model.Grammatikthema;
import idpa.project.service.GrammatikthemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Klasse:
 *
 * @author: Tobias Sauter
 * @version:
 */
@RestController
@RequestMapping("/api/grammatikthema")
@CrossOrigin
public class GrammatikthemaController {

    @Autowired
    private GrammatikthemaService grammatikthemaService;

    @PostMapping("/add")
    public String add(@RequestBody Grammatikthema grammatikthema) {
        grammatikthemaService.saveGrammatikthema(grammatikthema);

        return "Added new Grammatikthema";
    }
}
